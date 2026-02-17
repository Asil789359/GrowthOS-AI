export default function HelpPage() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-black text-white">Help & Support</h1>
            <p className="text-slate-400 mt-2">Get the most out of GrowthOS AI marketing stack.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-2xl border border-white/5 glass-dark hover:border-indigo-500/30 transition-all cursor-pointer">
                    <h3 className="text-white font-bold mb-2">Documentation</h3>
                    <p className="text-slate-500 text-sm italic">Learn how to configure the AI SEO Engine and content studios.</p>
                </div>
                <div className="p-6 rounded-2xl border border-white/5 glass-dark hover:border-emerald-500/30 transition-all cursor-pointer">
                    <h3 className="text-white font-bold mb-2">Community</h3>
                    <p className="text-slate-500 text-sm italic">Join 500+ D2C founders scaling their brands with GrowthOS.</p>
                </div>
            </div>
        </div>
    );
}
