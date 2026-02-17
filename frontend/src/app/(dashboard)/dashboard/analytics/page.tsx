"use client";

import { motion } from "framer-motion";
import {
    BarChart3,
    TrendingUp,
    TrendingDown,
    Target,
    UserMinus,
    DollarSign,
    Calendar,
    Filter,
    Download,
    BrainCircuit
} from "lucide-react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    LineChart,
    Line
} from "recharts";

const revenueData = [
    { month: "Jan", actual: 4000, predicted: 4200 },
    { month: "Feb", actual: 5000, predicted: 5100 },
    { month: "Mar", actual: 4500, predicted: 4800 },
    { month: "Apr", actual: 6000, predicted: 6200 },
    { month: "May", actual: 7000, predicted: 7500 },
    { month: "Jun", actual: 8500, predicted: 9000 },
    { month: "Jul", actual: null, predicted: 11000 },
    { month: "Aug", actual: null, predicted: 13500 },
];

const churnData = [
    { name: "Safe", value: 75, color: "#10b981" },
    { name: "At Risk", value: 20, color: "#f59e0b" },
    { name: "Critical", value: 5, color: "#ef4444" },
];

export default function AnalyticsPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-white flex items-center gap-3">
                        <BarChart3 className="w-8 h-8 text-indigo-500" />
                        Predictive Analytics
                    </h1>
                    <p className="text-slate-400 mt-1 font-medium italic">Powered by GrowthOS ML Models</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 glass text-slate-300 rounded-xl text-sm font-bold flex items-center gap-2 border border-white/5 hover:bg-white/5 transition-all">
                        <Calendar className="w-4 h-4" />
                        Last 6 Months
                    </button>
                    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold flex items-center gap-2 transition-all">
                        <Download className="w-4 h-4" />
                        Export Data
                    </button>
                </div>
            </div>

            {/* Probability Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: "Revenue Forecast (Q3)", value: "₹4.2M", icon: DollarSign, color: "text-emerald-500", confidence: "94%" },
                    { label: "Target CAC", value: "₹450", icon: Target, color: "text-indigo-500", confidence: "88%" },
                    { label: "Predicted Churn Rate", value: "2.4%", icon: UserMinus, color: "text-rose-500", confidence: "91%" },
                ].map((item, i) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 rounded-3xl glass-dark border border-white/5 space-y-4 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-4">
                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest tracking-widest">Confidence Score</div>
                            <div className="text-right text-xs font-black text-indigo-400">{item.confidence}</div>
                        </div>
                        <div className={`p-4 rounded-2xl bg-white/5 w-fit ${item.color}`}>
                            <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-400">{item.label}</p>
                            <h3 className="text-3xl font-black text-white mt-1 italic tracking-tight">{item.value}</h3>
                        </div>
                        <div className="absolute -bottom-8 -right-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <item.icon className="w-32 h-32" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Main Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Revenue Forecast Chart */}
                <div className="lg:col-span-8 p-8 rounded-3xl glass-dark border border-white/5 space-y-8">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-emerald-500" />
                            Revenue Projection
                        </h3>
                        <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest">
                            <div className="flex items-center gap-2 text-indigo-400">
                                <div className="w-3 h-3 rounded-full bg-indigo-500" /> Actual
                            </div>
                            <div className="flex items-center gap-2 text-slate-500">
                                <div className="w-3 h-3 rounded-full bg-slate-700" /> ML Forecast
                            </div>
                        </div>
                    </div>
                    <div className="h-[400px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={revenueData}>
                                <defs>
                                    <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px" }}
                                    itemStyle={{ color: "#fff" }}
                                />
                                <Area type="monotone" dataKey="predicted" stroke="#334155" strokeWidth={2} strokeDasharray="5 5" fill="transparent" />
                                <Area type="monotone" dataKey="actual" stroke="#6366f1" strokeWidth={4} fillOpacity={1} fill="url(#colorActual)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Churn Prediction */}
                <div className="lg:col-span-4 p-8 rounded-3xl glass-dark border border-white/5 space-y-8 flex flex-col">
                    <h3 className="text-xl font-bold text-white">Customer Churn Risk</h3>
                    <div className="flex-1 flex items-center justify-center min-h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={churnData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={100}
                                    paddingAngle={8}
                                    dataKey="value"
                                >
                                    {churnData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px" }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute flex flex-col items-center">
                            <span className="text-slate-500 text-[10px] font-bold uppercase">Healthy</span>
                            <span className="text-3xl font-black text-white">75%</span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {churnData.map((item) => (
                            <div key={item.name} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                    <span className="text-slate-300 text-sm font-medium">{item.name}</span>
                                </div>
                                <span className="text-white font-bold text-sm">{item.value}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-8 rounded-3xl bg-indigo-600/5 border border-indigo-500/20">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                        <BrainCircuit className="text-white w-8 h-8" />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-white font-black italic text-lg tracking-tight">AI Insights: Expansion Opportunity</h4>
                        <p className="text-slate-400 mt-2 leading-relaxed">
                            Our predictive models indicate a high affinity for your <span className="text-white font-bold">Growth Plan</span> among current <span className="text-white font-bold">Starter</span> users
                            who have generated more than 50 articles. Automating a personalized upgrade sequence could yield <span className="text-emerald-500 font-bold">₹2.4L additional MRR</span>.
                        </p>
                    </div>
                    <button className="px-8 py-3 bg-white text-indigo-900 rounded-2xl font-black text-sm hover:bg-slate-200 transition-all shrink-0">
                        Run Campaign
                    </button>
                </div>
            </div>
        </div>
    );
}
