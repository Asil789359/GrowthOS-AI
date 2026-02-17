"use client";

import { motion } from "framer-motion";
import {
    Search,
    PenTool,
    Zap,
    BarChart3,
    Users,
    CheckCircle2
} from "lucide-react";

const features = [
    {
        title: "AI SEO Engine",
        description: "NLP-based keyword clustering, intent detection, and SERP opportunity analysis with on-page grading.",
        icon: Search,
        color: "bg-blue-500",
        gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "AI Content Studio",
        description: "Multi-channel content generation including blogs, ads, and emails with brand voice fine-tuning.",
        icon: PenTool,
        color: "bg-purple-500",
        gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
        title: "Marketing Automation",
        description: "Visual funnel builder with trigger-based sequences for cart abandonment and lead scoring.",
        icon: Zap,
        color: "bg-amber-500",
        gradient: "from-amber-500/20 to-orange-500/20"
    },
    {
        title: "Predictive Analytics",
        description: "Conversion probability scoring, churn prediction, and revenue forecasting using LLM insights.",
        icon: BarChart3,
        color: "bg-emerald-500",
        gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
        title: "Journey Orchestration",
        description: "Unified user timeline across devices with real-time behavior triggers and personalization.",
        icon: Users,
        color: "bg-rose-500",
        gradient: "from-rose-500/20 to-red-500/20"
    },
    {
        title: "Enterprise Security",
        description: "GDPR compliance, encrypted storage, and role-based access control for your valuable data.",
        icon: CheckCircle2,
        color: "bg-indigo-500",
        gradient: "from-indigo-500/20 to-violet-500/20"
    }
];

export default function Features() {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Everything you need to <br />
                        <span className="text-gradient">Dominate Your Market.</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Forget disconnected tools. GrowthOS AI unifies your marketing stack with
                        intelligence that learns from your data.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-8 rounded-3xl border border-white/10 glass-dark hover:border-white/20 transition-all group relative overflow-hidden`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <feature.icon className="text-white w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
