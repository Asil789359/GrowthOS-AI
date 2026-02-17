"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Wand2, ShieldCheck } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
            {/* Background blobs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center space-x-3 px-4 py-2 glass rounded-full border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-4"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span>Introducing GrowthOS AI 1.0</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight"
                    >
                        Scale Your Brand <br />
                        <span className="text-gradient">With AI Precision.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl text-lg md:text-xl text-slate-400 font-medium"
                    >
                        The all-in-one AI marketing operating system for startups and D2C brands.
                        Automate SEO, orchestrate journeys, and predict conversions in one unified stack.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4"
                    >
                        <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center space-x-2 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                            <span>Start Scaling Free</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="px-8 py-4 glass text-white rounded-2xl font-bold hover:bg-white/10 transition-all border border-white/20">
                            Watch Demo video
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="mt-20 relative w-full max-w-5xl"
                    >
                        <div className="rounded-3xl border border-white/10 glass p-2 overflow-hidden shadow-2xl">
                            {/* Dashboard Preview Mockup */}
                            <div className="bg-slate-950 rounded-2xl aspect-video border border-white/5 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-grid opacity-20"></div>
                                <div className="z-10 flex flex-col items-center">
                                    <Wand2 className="w-16 h-16 text-indigo-500 mb-4 animate-bounce" />
                                    <p className="text-indigo-300 font-mono">Generating AI Marketing Intelligence...</p>
                                </div>
                                {/* Decorative UI elements */}
                                <div className="absolute top-4 left-4 flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                </div>
                            </div>
                        </div>
                        {/* Badges around dashboard */}
                        <div className="absolute -top-10 -right-10 glass p-4 rounded-2xl border border-fuchsia-500/30 flex items-center space-x-3 hidden lg:flex">
                            <ShieldCheck className="text-fuchsia-500" />
                            <div>
                                <div className="text-xs text-slate-400">Security</div>
                                <div className="text-sm font-bold text-white">Advanced AI Guard</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
