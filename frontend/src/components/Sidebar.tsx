"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Rocket,
    LayoutDashboard,
    Search,
    PenTool,
    Zap,
    BarChart3,
    Users,
    Settings,
    HelpCircle,
    LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
    { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
    { icon: Search, label: "SEO Engine", href: "/dashboard/seo" },
    { icon: PenTool, label: "AI Studio", href: "/dashboard/studio" },
    { icon: Zap, label: "Automation", href: "/dashboard/automation" },
    { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
    { icon: Users, label: "Customers", href: "/dashboard/customers" },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 border-r border-white/5 bg-slate-950 flex flex-col h-screen sticky top-0">
            <div className="p-6 border-b border-white/5">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
                        <Rocket className="text-white w-5 h-5" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-white italic">
                        Growth<span className="text-indigo-500">OS</span>
                    </span>
                </Link>
            </div>

            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all group",
                                isActive
                                    ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]"
                                    : "text-slate-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon className={cn("w-5 h-5", isActive ? "text-indigo-400" : "text-slate-400 group-hover:text-white")} />
                            <span className="font-medium text-sm">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-white/5 space-y-1">
                <Link href="/settings" className="flex items-center space-x-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                    <Settings className="w-5 h-5" />
                    <span className="font-medium text-sm">Settings</span>
                </Link>
                <Link href="/help" className="flex items-center space-x-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                    <HelpCircle className="w-5 h-5" />
                    <span className="font-medium text-sm">Help & Support</span>
                </Link>
                <button className="w-full flex items-center space-x-3 px-3 py-2.5 text-rose-400 hover:text-rose-300 hover:bg-rose-500/5 rounded-xl transition-all mt-4">
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium text-sm">Sign Out</span>
                </button>
            </div>
        </aside>
    );
}
