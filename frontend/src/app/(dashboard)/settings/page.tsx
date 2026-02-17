export default function SettingsPage() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-black text-white">Settings</h1>
            <p className="text-slate-400 mt-2">Manage your GrowthOS AI preferences and API keys.</p>
            <div className="mt-8 p-12 rounded-3xl border border-white/5 glass-dark flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl italic text-slate-500">?</span>
                </div>
                <h3 className="text-white font-bold">Workspace Configuration</h3>
                <p className="text-slate-500 text-sm max-w-xs mt-2">Personalize your AI engine and team permissions. (Module Coming Soon)</p>
            </div>
        </div>
    );
}
