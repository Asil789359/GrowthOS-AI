export const loadRazorpay = () => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
};

export const handlePayment = async (plan: { name: string; price: string }) => {
    const res = await loadRazorpay();

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    // prices come in format "₹2,999" - need to convert to number
    const amount = parseInt(plan.price.replace(/[^\d]/g, ""), 10);

    // 1. Create order on the backend
    const data = await fetch("http://localhost:8080/api/v1/payments/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            plan_name: plan.name,
            amount: amount,
        }),
    }).then((t) => t.json());

    console.log("Order created:", data);

    const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_your_id",
        amount: data.amount,
        currency: data.currency,
        name: "GrowthOS AI",
        description: `Subscription for ${plan.name} Plan`,
        image: "/rocket.png", // Use a real logo path if available
        order_id: data.id,
        handler: async function (response: any) {
            // 2. Verify payment on the backend
            const verifyRes = await fetch("http://localhost:8080/api/v1/payments/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                }),
            }).then((t) => t.json());

            if (verifyRes.status === "success") {
                alert("Payment Successful! Welcome to GrowthOS AI.");
                window.location.href = "/dashboard";
            } else {
                alert("Payment verification failed. Please contact support.");
            }
        },
        prefill: {
            name: "User Name",
            email: "user@example.com",
        },
        theme: {
            color: "#6366f1",
        },
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
};
