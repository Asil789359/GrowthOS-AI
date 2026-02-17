"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LayoutDashboard, Menu, X, Rocket } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 glass-dark" : "py-6 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                        <Rocket className="text-white w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-white italic">
                        Growth<span className="text-indigo-500">OS</span> AI
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {["Features", "Pricing"].map((item) => (
                        <Link
                            key={item}
                            href={`/#${item.toLowerCase()}`}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        href="/dashboard"
                        className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="/dashboard"
                        className="flex items-center space-x-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-sm font-semibold transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                    >
                        <LayoutDashboard className="w-4 h-4" />
                        <span>Go to App</span>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 right-0 glass-dark py-6 px-6 space-y-4"
                >
                    {["Features", "Pricing"].map((item) => (
                        <Link
                            key={item}
                            href={`/#${item.toLowerCase()}`}
                            className="block text-lg font-medium text-slate-300"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        href="/dashboard"
                        className="block text-lg font-medium text-slate-300"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Dashboard
                    </Link>

                    <Link
                        href="/dashboard"
                        className="block w-full text-center px-5 py-3 bg-indigo-600 text-white rounded-xl font-semibold"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Launch Dashboard
                    </Link>
                </motion.div>
            )}
        </nav>
    );
}
