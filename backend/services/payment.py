import razorpay
import os
from dotenv import load_dotenv

load_dotenv()

client = razorpay.Client(auth=(os.getenv("RAZORPAY_KEY_ID"), os.getenv("RAZORPAY_KEY_SECRET")))

class PaymentService:
    def create_order(self, amount: int, currency: str = "INR"):
        """
        Amount should be in paisa (e.g., 299900 for 2999 INR)
        """
        data = {
            "amount": amount,
            "currency": currency,
            "payment_capture": 1 # Auto capture
        }
        order = client.order.create(data=data)
        return order

    def verify_payment(self, razorpay_order_id: str, razorpay_payment_id: str, razorpay_signature: str):
        try:
            client.utility.verify_payment_signature({
                'razorpay_order_id': razorpay_order_id,
                'razorpay_payment_id': razorpay_payment_id,
                'razorpay_signature': razorpay_signature
            })
            return True
        except Exception:
            return False

payment_service = PaymentService()
