"use client";

import Link from "next/link";
import { Rocket, Twitter, Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-20 border-t border-white/5 bg-slate-950">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
                                <Rocket className="text-white w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white italic">
                                Growth<span className="text-indigo-500">OS</span> AI
                            </span>
                        </Link>
                        <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
                            We empower startups and D2C brands to automate their marketing operations
                            with AI-native intelligence. The future of growth is autonomous.
                        </p>
                        <div className="flex items-center space-x-4">
                            {[Twitter, Linkedin, Github].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                                >
                                    <Icon className="w-5 h-5 text-slate-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Product</h4>
                        <ul className="space-y-4">
                            {["AI SEO Engine", "Content Studio", "Automation", "Analytics"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            {["About Us", "Privacy Policy", "Terms of Service", "Docs"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:row items-center justify-between pt-8 border-t border-white/5 space-y-4 md:space-y-0">
                    <p className="text-slate-500 text-xs text-center md:text-left">
                        © 2026 GrowthOS AI. All rights reserved. Made by Antigravity AI.
                    </p>
                    <div className="flex items-center space-x-2 text-slate-500 text-xs">
                        <Mail className="w-3.5 h-3.5" />
                        <span>hello@growthos.ai</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
