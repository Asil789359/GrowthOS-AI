"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Sparkles,
    Send,
    Copy,
    Download,
    RefreshCw,
    PenTool,
    FileText,
    Mail,
    Megaphone,
    Layout
} from "lucide-react";
import { cn } from "@/lib/utils";

const contentTypes = [
    { id: "blog", icon: FileText, label: "SEO Blog Post" },
    { id: "landing", icon: Layout, label: "Landing Page" },
    { id: "email", icon: Mail, label: "Email Sequence" },
    { id: "ad", icon: Megaphone, label: "Ad Copy" },
];

export default function StudioPage() {
    const [selectedType, setSelectedType] = useState("blog");
    const [prompt, setPrompt] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedContent, setGeneratedContent] = useState("");

    const handleGenerate = async () => {
        if (!prompt) return;
        setIsGenerating(true);

        // Simulate API call
        setTimeout(() => {
            setGeneratedContent(`
# How AI is Transforming D2C Marketing in 2026

The landscape of Direct-to-Consumer (D2C) marketing has undergone a seismic shift...

## 1. Hyper-Personalization at Scale
AI algorithms now allow brands to deliver...

## 2. Predictive Inventory Management
By analyzing purchase patterns, GrowthOS AI helps...

## 3. Autonomous Content Orchestration
The days of manual scheduling are over...

### Conclusion
Embracing AI is no longer optional for growth-focused brands.
      `);
            setIsGenerating(false);
        }, 2000);
    };

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-black text-white flex items-center gap-3">
                    <Sparkles className="w-8 h-8 text-indigo-500" />
                    AI Content Studio
                </h1>
                <p className="text-slate-400 mt-1 font-medium">Generate high-converting, SEO-optimized marketing assets in seconds.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Input Controls */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="p-6 rounded-3xl glass-dark border border-white/5 space-y-4">
                        <h3 className="text-white font-bold text-sm uppercase tracking-wider">Content Type</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {contentTypes.map((type) => (
                                <button
                                    key={type.id}
                                    onClick={() => setSelectedType(type.id)}
                                    className={cn(
                                        "flex flex-col items-center justify-center p-4 rounded-2xl border transition-all space-y-2",
                                        selectedType === type.id
                                            ? "bg-indigo-600/20 border-indigo-500 text-indigo-400"
                                            : "bg-slate-900 border-white/5 text-slate-500 hover:border-white/10 hover:text-slate-300"
                                    )}
                                >
                                    <type.icon className="w-6 h-6" />
                                    <span className="text-[10px] font-bold">{type.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 rounded-3xl glass-dark border border-white/5 space-y-4">
                        <h3 className="text-white font-bold text-sm uppercase tracking-wider">Instructions</h3>
                        <textarea
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="e.g. Write a 500-word blog post about the benefits of AI for D2C brands, focusing on scalability and personalization."
                            className="w-full h-40 bg-slate-950 border border-white/10 rounded-2xl p-4 text-slate-300 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none text-sm"
                        />
                        <button
                            onClick={handleGenerate}
                            disabled={isGenerating || !prompt}
                            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-600/50 disabled:cursor-not-allowed text-white rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all"
                        >
                            {isGenerating ? (
                                <>
                                    <RefreshCw className="w-5 h-5 animate-spin" />
                                    <span>Synthesizing...</span>
                                </>
                            ) : (
                                <>
                                    <PenTool className="w-5 h-5" />
                                    <span>Generate Content</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Output Preview */}
                <div className="lg:col-span-8">
                    <div className="h-full min-h-[600px] p-8 rounded-3xl glass-dark border border-white/5 flex flex-col relative overflow-hidden">
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-[80px] -z-10" />

                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse" />
                                <h3 className="text-white font-bold italic tracking-tight uppercase text-xs">AI Preview Engine</h3>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="p-2 glass rounded-lg text-slate-400 hover:text-white transition-colors" title="Copy">
                                    <Copy className="w-4 h-4" />
                                </button>
                                <button className="p-2 glass rounded-lg text-slate-400 hover:text-white transition-colors" title="Download">
                                    <Download className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 bg-slate-950/50 rounded-2xl p-8 overflow-y-auto font-serif border border-white/5 leading-relaxed text-slate-300 selection:bg-indigo-500/30">
                            <AnimatePresence mode="wait">
                                {generatedContent ? (
                                    <motion.div
                                        key="content"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="whitespace-pre-wrap prose prose-invert max-w-none"
                                    >
                                        {generatedContent}
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="empty"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="h-full flex flex-col items-center justify-center text-center space-y-4"
                                    >
                                        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center">
                                            <Sparkles className="w-10 h-10 text-slate-700" />
                                        </div>
                                        <p className="text-slate-600 max-w-xs font-medium italic">
                                            Input instructions and click generate to see the magic happen.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Footer Actions */}
                        <div className="mt-6 flex justify-end">
                            <button className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl text-sm font-bold border border-white/10 transition-all flex items-center gap-2">
                                <Send className="w-4 h-4" />
                                Publish to Blog
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
