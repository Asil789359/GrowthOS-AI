"use client";

import { motion } from "framer-motion";
import {
    Search,
    TrendingUp,
    TrendingDown,
    Globe,
    ShieldAlert,
    Zap,
    CheckCircle2,
    ExternalLink,
    ChevronRight
} from "lucide-react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell
} from "recharts";
import { cn } from "@/lib/utils";


const keywordData = [
    { keyword: "ai marketing platform", volume: "12k", rank: 2, trend: "up" },
    { keyword: "seo automation tools", volume: "8.5k", rank: 5, trend: "up" },
    { keyword: "d2c growth strategies", volume: "5.2k", rank: 12, trend: "down" },
    { keyword: "predictive analytics saas", volume: "3.1k", rank: 1, trend: "stable" },
    { keyword: "content generation ai", volume: "25k", rank: 8, trend: "up" },
];

const auditScores = [
    { name: "Performance", score: 92, color: "#6366f1" },
    { name: "Accessibility", score: 88, color: "#d946ef" },
    { name: "Best Practices", score: 95, color: "#10b981" },
    { name: "SEO", score: 84, color: "#f59e0b" },
];

export default function SEOEnginePage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black text-white flex items-center gap-3">
                        <Search className="w-8 h-8 text-indigo-500" />
                        AI SEO Engine
                    </h1>
                    <p className="text-slate-400 mt-1 font-medium">NLP-based analysis and technical SEO orchestration.</p>
                </div>
                <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                    <Zap className="w-4 h-4 fill-white" />
                    Start Deep Scan
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Site Health Audit */}
                <div className="lg:col-span-4 p-8 rounded-3xl glass-dark border border-white/5 space-y-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Site Health</h3>
                        <p className="text-slate-400 text-sm">Last scan: 2 hours ago</p>
                    </div>

                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={auditScores} layout="vertical" margin={{ left: 0, right: 30 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                                <XAxis type="number" hide />
                                <YAxis dataKey="name" type="category" stroke="#fff" fontSize={12} width={100} tickLine={false} axisLine={false} />
                                <Tooltip
                                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                    contentStyle={{ backgroundColor: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px" }}
                                />
                                <Bar dataKey="score" radius={[0, 4, 4, 0]} barSize={20}>
                                    {auditScores.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 border border-white/5">
                            <div className="flex items-center gap-3">
                                <ShieldAlert className="text-amber-500 w-5 h-5" />
                                <span className="text-white text-sm font-medium">3 Critical Errors</span>
                            </div>
                            <ChevronRight className="text-slate-600 w-4 h-4" />
                        </div>
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 border border-white/5">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                                <span className="text-white text-sm font-medium">Schema Validated</span>
                            </div>
                            <ChevronRight className="text-slate-600 w-4 h-4" />
                        </div>
                    </div>
                </div>

                {/* Keyword Tracking */}
                <div className="lg:col-span-8 p-8 rounded-3xl glass-dark border border-white/5 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white">Keyword Intelligence</h3>
                        <button className="text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors">View All Keywords</button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="pb-4 text-slate-500 text-xs font-bold uppercase tracking-wider">Keyword</th>
                                    <th className="pb-4 text-slate-500 text-xs font-bold uppercase tracking-wider text-center">Volume</th>
                                    <th className="pb-4 text-slate-500 text-xs font-bold uppercase tracking-wider text-center">Rank</th>
                                    <th className="pb-4 text-slate-500 text-xs font-bold uppercase tracking-wider text-center">Trend</th>
                                    <th className="pb-4 text-slate-500 text-xs font-bold uppercase tracking-wider text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {keywordData.map((kw, i) => (
                                    <tr key={i} className="group hover:bg-white/5 transition-colors">
                                        <td className="py-4">
                                            <div className="flex items-center gap-2">
                                                <Globe className="w-4 h-4 text-slate-600" />
                                                <span className="text-white font-medium text-sm">{kw.keyword}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 text-center text-slate-300 text-sm">{kw.volume}</td>
                                        <td className="py-4 text-center">
                                            <span className={cn(
                                                "px-2 py-1 rounded text-[10px] font-bold",
                                                kw.rank <= 3 ? "bg-indigo-500/20 text-indigo-400" : "bg-slate-800 text-slate-400"
                                            )}>
                                                #{kw.rank}
                                            </span>
                                        </td>
                                        <td className="py-4 text-center">
                                            {kw.trend === "up" ? (
                                                <TrendingUp className="w-4 h-4 text-emerald-500 mx-auto" />
                                            ) : kw.trend === "down" ? (
                                                <TrendingDown className="w-4 h-4 text-rose-500 mx-auto" />
                                            ) : (
                                                <div className="w-4 h-1 bg-slate-700 rounded-full mx-auto" />
                                            )}
                                        </td>
                                        <td className="py-4 text-right">
                                            <button className="p-2 text-slate-600 hover:text-indigo-400 transition-colors">
                                                <ExternalLink className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-6 rounded-2xl bg-indigo-600/5 border border-indigo-500/10 mt-4">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-indigo-500/20 rounded-lg">
                                <Zap className="w-5 h-5 text-indigo-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Opportunity Detected!</h4>
                                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                                    Your competitor <span className="text-white font-bold">MarketingHub</span> recently lost ranking for <span className="text-white font-bold italic">&ldquo;saas growth automation&rdquo;</span>.
                                    GrowthOS recommends creating a comparison page to capture this traffic.
                                </p>
                                <button className="mt-3 text-indigo-400 text-xs font-bold hover:underline">Generate Content Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
