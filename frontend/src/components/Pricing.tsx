"use client";

import { motion } from "framer-motion";

import { Check, Zap } from "lucide-react";
import { handlePayment } from "@/lib/payment";

const plans = [

    {
        name: "Starter",
        price: "₹2,999",
        description: "Perfect for freelancers and small content creators.",
        features: [
            "AI Content Generation",
            "Basic SEO Audit",
            "Limited Keywords",
            "Email Support",
            "Single Account"
        ],
        buttonText: "Start Free Trial",
        popular: false
    },
    {
        name: "Growth",
        price: "₹9,999",
        description: "Best for growing startups and D2C brands.",
        features: [
            "Everything in Starter",
            "Automation Workflows",
            "Lead Scoring",
            "Predictive Insights",
            "Priority Support"
        ],
        buttonText: "Join Growth",
        popular: true
    },
    {
        name: "Pro",
        price: "₹29,999",
        description: "For agencies and SaaS looking for full control.",
        features: [
            "Everything in Growth",
            "Personalization Engine",
            "Data Warehouse Sync",
            "White-label Reports",
            "API Access"
        ],
        buttonText: "Go Pro",
        popular: false
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 relative overflow-hidden bg-slate-950/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Simple, Transparent <br />
                        <span className="text-gradient">Pricing for Every Stage.</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg italic">
                        Start free, scale as you grow. No hidden fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 rounded-3xl border ${plan.popular ? "border-indigo-500 glass-dark" : "border-white/10 glass"
                                } flex flex-col`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-8 -translate-y-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                                    <Zap className="w-3 h-3 fill-white" />
                                    <span>MOST POPULAR</span>
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="flex items-baseline space-x-1">
                                    <span className="text-4xl font-black text-white">{plan.price}</span>
                                    <span className="text-slate-400 text-sm">/month</span>
                                </div>
                                <p className="text-slate-400 mt-4 text-sm">{plan.description}</p>
                            </div>

                            <div className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature, fIndex) => (
                                    <div key={fIndex} className="flex items-center space-x-3">
                                        <div className="w-5 h-5 rounded-full bg-indigo-500/10 flex items-center justify-center">
                                            <Check className="w-3.5 h-3.5 text-indigo-500" />
                                        </div>
                                        <span className="text-slate-300 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => handlePayment(plan)}
                                className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.popular
                                    ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                                    : "glass hover:bg-white/10 text-white border border-white/20"
                                    }`}
                            >
                                {plan.buttonText}
                            </button>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
