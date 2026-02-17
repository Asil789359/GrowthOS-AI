"use client";

import { motion } from "framer-motion";
import {
    Plus,
    Zap,
    MousePointer2,
    Mail,
    Users,
    Settings,
    MoreVertical,
    Play,
    Clock,
    Layout,
    MessageSquare
} from "lucide-react";

const nodes = [
    { id: 1, type: "trigger", label: "Page Visit", sub: "/pricing", icon: MousePointer2, color: "bg-blue-500" },
    { id: 2, type: "condition", label: "Wait 2 Hours", sub: "Delay", icon: Clock, color: "bg-amber-500" },
    { id: 3, type: "action", label: "Send Email", sub: "Personalized Offer", icon: Mail, color: "bg-indigo-500" },
    { id: 4, type: "action", label: "WhatsApp Message", sub: "Follow-up", icon: MessageSquare, color: "bg-emerald-500" },
];

export default function AutomationPage() {
    return (
        <div className="h-full flex flex-col space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-white flex items-center gap-3">
                        <Zap className="w-8 h-8 text-amber-500" />
                        Marketing Automation
                    </h1>
                    <p className="text-slate-400 mt-1 font-medium">Orchestrate multi-channel journeys with visual triggers.</p>
                </div>
                <div className="flex items-center gap-4">
                    <button className="px-6 py-2.5 glass text-white rounded-xl font-bold flex items-center gap-2 border border-white/10 hover:bg-white/5 transition-all">
                        <Settings className="w-4 h-4" />
                        Settings
                    </button>
                    <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                        <Play className="w-4 h-4 fill-white" />
                        Activate Funnel
                    </button>
                </div>
            </div>

            <div className="flex-1 min-h-[600px] rounded-3xl border border-white/5 glass-dark relative overflow-hidden bg-slate-900/50">
                {/* Canvas Grid Background */}
                <div className="absolute inset-0 bg-grid opacity-10" />

                {/* Tool Palette */}
                <div className="absolute top-8 left-8 p-2 rounded-2xl glass-dark border border-white/10 flex flex-col space-y-2 z-10 shadow-2xl">
                    <button className="p-3 bg-indigo-600 text-white rounded-xl shadow-lg" title="Add Step">
                        <Plus className="w-6 h-6" />
                    </button>
                    <button className="p-3 text-slate-400 hover:bg-white/5 rounded-xl transition-colors" title="Triggers">
                        <Zap className="w-6 h-6" />
                    </button>
                    <button className="p-3 text-slate-400 hover:bg-white/5 rounded-xl transition-colors" title="Layouts">
                        <Layout className="w-6 h-6" />
                    </button>
                </div>

                {/* Visual Flow Canvas */}
                <div className="relative h-full flex flex-col items-center justify-center p-20">
                    {nodes.map((node, i) => (
                        <div key={node.id} className="flex flex-col items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="w-64 p-4 rounded-2xl glass border border-white/10 shadow-xl relative group"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className={`p-2 rounded-lg ${node.color}`}>
                                        <node.icon className="w-4 h-4 text-white" />
                                    </div>
                                    <button className="text-slate-600 hover:text-white transition-colors">
                                        <MoreVertical className="w-4 h-4" />
                                    </button>
                                </div>
                                <h4 className="text-white font-bold text-sm tracking-tight">{node.label}</h4>
                                <p className="text-slate-500 text-xs mt-1 font-medium">{node.sub}</p>

                                {/* Connector Dots */}
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-700 z-10" />
                                {i > 0 && (
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-700 z-10" />
                                )}
                            </motion.div>

                            {/* Flow Line */}
                            {i < nodes.length - 1 && (
                                <div className="w-1 h-12 bg-gradient-to-b from-slate-700 to-slate-800 my-2" />
                            )}
                        </div>
                    ))}

                    {/* Empty Drop Zone */}
                    <div className="mt-8">
                        <button className="w-64 h-16 rounded-2xl border-2 border-dashed border-white/5 hover:border-white/20 transition-all flex items-center justify-center gap-2 text-slate-600 hover:text-slate-400 group">
                            <div className="w-8 h-8 rounded-full border border-dashed border-slate-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Plus className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest">Add Step</span>
                        </button>
                    </div>
                </div>

                {/* Mini Map or Stats Overlay */}
                <div className="absolute bottom-8 right-8 p-6 rounded-2xl glass-dark border border-white/10 space-y-4 shadow-2xl">
                    <h5 className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        Live Stats
                    </h5>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <div className="text-slate-500 text-[10px] font-bold uppercase">Entered</div>
                            <div className="text-white text-lg font-black">12.4k</div>
                        </div>
                        <div>
                            <div className="text-slate-500 text-[10px] font-bold uppercase">Converted</div>
                            <div className="text-emerald-500 text-lg font-black">892</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
