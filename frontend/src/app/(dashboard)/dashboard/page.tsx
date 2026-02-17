"use client";

import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    TrendingUp,
    Users,
    PenTool,
    Search,
    BarChart2
} from "lucide-react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const INITIAL_STATS = [
    { id: "traffic", label: "Total Traffic", value: "124,500", icon: TrendingUp, color: "text-emerald-500", trend: "+12%" },
    { id: "ai_usage", label: "AI Tokens Used", value: "452,000", icon: PenTool, color: "text-indigo-500", trend: "+450" },
    { id: "keywords", label: "Active Keywords", value: "482", icon: Search, color: "text-amber-500", trend: "+18" },
    { id: "conversions", label: "Total Conversions", value: "8,920", icon: Users, color: "text-rose-500", trend: "+5.2%" },
];

const data = [
    { name: "Mon", traffic: 4000, conv: 2400 },
    { name: "Tue", traffic: 3000, conv: 1398 },
    { name: "Wed", traffic: 2000, conv: 9800 },
    { name: "Thu", traffic: 2780, conv: 3908 },
    { name: "Fri", traffic: 1890, conv: 4800 },
    { name: "Sat", traffic: 2390, conv: 3800 },
    { name: "Sun", traffic: 3490, conv: 4300 },
];


export default function DashboardPage() {
    const [liveStats, setLiveStats] = useState(INITIAL_STATS);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/v1/stats/live");
                if (!response.ok) throw new Error("Backend unavailable");
                const data = await response.json();

                if (data) {
                    setLiveStats(prev => prev.map(stat => {
                        if (stat.id === "traffic" && data.traffic !== undefined)
                            return { ...stat, value: data.traffic.toLocaleString() };
                        if (stat.id === "conversions" && data.conversions !== undefined)
                            return { ...stat, value: data.conversions.toLocaleString() };
                        if (stat.id === "ai_usage" && data.ai_usage !== undefined)
                            return { ...stat, value: data.ai_usage.toLocaleString() };
                        return stat;
                    }));
                }
            } catch (error) {
                console.error("Failed to fetch live stats:", error);
            }

        };

        const interval = setInterval(fetchStats, 3000);
        return () => clearInterval(interval);
    }, []);

    return (

        <div className="space-y-8">
            {/* Welcome Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-white">Welcome back, Asil</h1>
                    <p className="text-slate-400 mt-1 font-medium italic">Here&apos;s what&apos;s happening with your marketing campaigns today.</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 glass-dark rounded-full border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Live Engine</span>
                </div>
            </div>


            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {liveStats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-2xl glass-dark border border-white/5 space-y-4"
                    >
                        <div className="flex items-center justify-between">
                            <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-lg">
                                {stat.trend}
                            </span>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-400">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-white mt-1">{stat.value}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 p-8 rounded-3xl glass-dark border border-white/5 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <BarChart2 className="w-5 h-5 text-indigo-500" />
                            Growth Velocity
                        </h3>
                        <select className="bg-slate-900 text-slate-300 text-sm border border-white/10 rounded-lg px-3 py-1 outline-none">
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                        </select>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px" }}
                                    itemStyle={{ color: "#fff" }}
                                />
                                <Area type="monotone" dataKey="traffic" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorTraffic)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="p-8 rounded-3xl glass-dark border border-white/5 space-y-6">
                    <h3 className="text-xl font-bold text-white">Predictive Scores</h3>
                    <div className="space-y-6">
                        {[
                            { label: "Conv. Probability", score: 85, color: "bg-indigo-500" },
                            { label: "Churn Risk", score: 12, color: "bg-rose-500" },
                            { label: "LTV Projection", score: 92, color: "bg-emerald-500" },
                        ].map((item) => (
                            <div key={item.label} className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400 font-medium">{item.label}</span>
                                    <span className="text-white font-bold">{item.score}%</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${item.score}%` }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className={`h-full ${item.color}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 mt-8">
                        <p className="text-xs text-indigo-300 font-medium italic">
                            &ldquo;Your campaigns are performing 15% better than last month. AI suggests increasing budget on the &lsquo;D2C Holiday&rsquo; sequence.&rdquo;
                        </p>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <button className="p-6 rounded-2xl glass-dark border border-white/5 hover:border-indigo-500/50 transition-all text-left flex items-center justify-between group">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-indigo-600/20 rounded-xl">
                            <PenTool className="w-6 h-6 text-indigo-400" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm">Create New Campaign</h4>
                            <p className="text-xs text-slate-500 mt-1">Start generating AI content</p>
                        </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                </button>
                <button className="p-6 rounded-2xl glass-dark border border-white/5 hover:border-amber-500/50 transition-all text-left flex items-center justify-between group">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-amber-600/20 rounded-xl">
                            <Search className="w-6 h-6 text-amber-400" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm">Run SEO Audit</h4>
                            <p className="text-xs text-slate-500 mt-1">Check site health and keywords</p>
                        </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-amber-400 transition-colors" />
                </button>
                <button className="p-6 rounded-2xl glass-dark border border-white/5 hover:border-emerald-500/50 transition-all text-left flex items-center justify-between group">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-emerald-600/20 rounded-xl">
                            <Users className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm">Sync Data Warehouse</h4>
                            <p className="text-xs text-slate-500 mt-1">Import BigQuery/Snowflake</p>
                        </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                </button>
            </div>
        </div>
    );
}
