"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Users,
    Search,
    Filter,
    MoreVertical,
    Mail,
    MessageSquare,
    Zap,
    MousePointer2,
    ShoppingCart,
    Phone,
    ArrowRight,
    User,
    History,
    Activity,
    Target
} from "lucide-react";

import { cn } from "@/lib/utils";

const customers = [
    { id: "1", name: "Sarah Jenkins", email: "sarah@techflow.io", plan: "Growth", score: 92, status: "Active" },
    { id: "2", name: "David Chen", email: "d.chen@nexus.ai", plan: "Starter", score: 45, status: "Churn Risk" },
    { id: "3", name: "Elena Rodriguez", email: "elena@fashionista.com", plan: "Pro", score: 98, status: "Active" },
    { id: "4", name: "Marcus Thorne", email: "m.thorne@saasify.co", plan: "Starter", score: 12, status: "Inactive" },
    { id: "5", name: "Aria Kim", email: "aria@growth.net", plan: "Growth", score: 85, status: "Active" },
];

const timeline = [
    { id: 1, type: "page_view", label: "Viewed Pricing Page", time: "2 hours ago", icon: MousePointer2, color: "bg-blue-500" },
    { id: 2, type: "email_open", label: "Opened Welcome Email", time: "5 hours ago", icon: Mail, color: "bg-indigo-500" },
    { id: 3, type: "cart_abandon", label: "Abandoned Pro Upgrade", time: "1 day ago", icon: ShoppingCart, color: "bg-rose-500" },
    { id: 4, type: "automation", label: "Triggered Retargeting Flow", time: "1 day ago", icon: Zap, color: "bg-amber-500" },
    { id: 5, type: "support", label: "Chatted with AI Bot", time: "2 days ago", icon: MessageSquare, color: "bg-emerald-500" },
];

export default function CustomersPage() {
    const [selectedUser, setSelectedUser] = useState(customers[0]);

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-white flex items-center gap-3">
                        <Users className="w-8 h-8 text-indigo-500" />
                        Customer Journeys
                    </h1>
                    <p className="text-slate-400 mt-1 font-medium italic">Unified user timeline & orchestration.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search users..."
                            className="bg-slate-900 border border-white/5 rounded-xl py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                        />
                    </div>
                    <button className="p-2 glass rounded-xl text-slate-400 hover:text-white transition-colors">
                        <Filter className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* User List */}
                <div className="lg:col-span-4 p-6 rounded-3xl glass-dark border border-white/5 flex flex-col h-[700px]">
                    <h3 className="text-white font-bold mb-6 flex items-center gap-2 px-2">
                        <Activity className="w-5 h-5 text-indigo-500" />
                        Audience
                    </h3>
                    <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                        {customers.map((user) => (
                            <button
                                key={user.id}
                                onClick={() => setSelectedUser(user)}
                                className={cn(
                                    "w-full p-4 rounded-2xl transition-all border text-left",
                                    selectedUser.id === user.id
                                        ? "bg-indigo-600/10 border-indigo-500/30 shadow-lg"
                                        : "bg-transparent border-transparent hover:bg-white/5"
                                )}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-white font-bold relative">
                                        {user.name.charAt(0)}
                                        {user.status === "Active" && (
                                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full" />
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-white font-bold text-sm truncate">{user.name}</h4>
                                        <p className="text-slate-500 text-xs truncate">{user.email}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-bold text-slate-500 uppercase">Score</div>
                                        <div className={cn("text-sm font-black italic", user.score > 80 ? "text-emerald-500" : "text-amber-500")}>
                                            {user.score}
                                        </div>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* User Intelligence / Timeline */}
                <div className="lg:col-span-8 space-y-6">
                    {/* Profile Header */}
                    <div className="p-8 rounded-3xl glass-dark border border-white/5 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                        {/* Decorative Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px] -z-10" />

                        <div className="w-24 h-24 rounded-3xl bg-indigo-600 flex items-center justify-center text-4xl font-black text-white italic shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                            {selectedUser.name.charAt(0)}
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-3xl font-black text-white tracking-tight">{selectedUser.name}</h2>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-2">
                                <span className="text-slate-400 text-sm font-medium italic">{selectedUser.email}</span>
                                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                                    {selectedUser.plan} Plan
                                </span>
                                <span className={cn(
                                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
                                    selectedUser.status === "Active" ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"
                                )}>
                                    {selectedUser.status}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="p-3 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-2xl border border-white/5 transition-colors">
                                <Mail className="w-5 h-5" />
                            </button>
                            <button className="p-3 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-2xl border border-white/5 transition-colors">
                                <Phone className="w-5 h-5" />
                            </button>
                            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all flex items-center gap-2">
                                Action
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Timeline & Insights */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Unified Timeline */}
                        <div className="p-8 rounded-3xl glass-dark border border-white/5 flex flex-col h-[400px]">
                            <h3 className="text-white font-bold mb-8 flex items-center gap-2">
                                <History className="w-5 h-5 text-indigo-500" />
                                Unified Timeline
                            </h3>
                            <div className="flex-1 overflow-y-auto relative pl-4 space-y-8">
                                {/* Vertical Line */}
                                <div className="absolute left-6 top-2 bottom-8 w-px bg-white/5" />

                                {timeline.map((event, i) => (
                                    <motion.div
                                        key={event.id}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="relative flex items-start gap-6"
                                    >
                                        <div className={cn("w-4 h-4 rounded-full border-2 border-slate-900 z-10", event.color)} />
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <event.icon className="w-3.5 h-3.5 text-slate-500" />
                                                <span className="text-white font-bold text-sm italic">{event.label}</span>
                                            </div>
                                            <p className="text-slate-500 text-xs font-medium">{event.time}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* AI Recommendations */}
                        <div className="p-8 rounded-3xl glass-dark border border-white/5 space-y-8 bg-gradient-to-br from-indigo-900/10 to-transparent">
                            <h3 className="text-white font-bold flex items-center gap-2">
                                <Zap className="w-5 h-5 text-amber-500" />
                                AI Personalization Engine
                            </h3>

                            <div className="space-y-6">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Recommended Action</span>
                                    <p className="text-white text-sm font-medium italic">
                                        Send &ldquo;Annual Pro Discount&rdquo; code via WhatsApp.
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <Target className="w-3 h-3 text-emerald-500" />
                                        Probability of conversion: 84%
                                    </div>
                                </div>

                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                                    <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest">Risk Warning</span>
                                    <p className="text-white text-sm font-medium italic">
                                        Inactive for 3 days after viewing Pro features.
                                    </p>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-400 rounded-2xl font-bold border border-indigo-500/20 transition-all text-sm italic">
                                Automate Personalization Hub
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
