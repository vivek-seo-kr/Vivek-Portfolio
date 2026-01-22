
import React, { useState } from 'react';
import { gemini } from '../services/geminiService';
import { AIResponse } from '../types';

const AITool: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIResponse | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!niche) return;
    
    setLoading(true);
    try {
      const data = await gemini.generateSEOStrategy(niche, url);
      setResult(data);
    } catch (error) {
      console.error("AI Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-tool" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="glass rounded-[2rem] p-8 md:p-16 border-2 border-blue-500/20 shadow-2xl shadow-blue-500/10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4">Get a <span className="gradient-text">Instant SEO Strategy</span></h2>
              <p className="text-slate-400 text-lg max-w-xl mx-auto">
                Powered by Gemini AI, get a custom high-level roadmap for your business niche in seconds.
              </p>
            </div>

            <form onSubmit={handleGenerate} className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 ml-1">Your Industry/Niche</label>
                <input 
                  type="text" 
                  placeholder="e.g. SaaS for HR, Local Bakery, Crypto App"
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 ml-1">Website URL (Optional)</label>
                <input 
                  type="url" 
                  placeholder="https://yourwebsite.com"
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              <button 
                type="submit"
                disabled={loading}
                className="md:col-span-2 py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Analyzing Opportunities...
                  </>
                ) : (
                  <>✨ Generate My Custom SEO Strategy</>
                )}
              </button>
            </form>

            {result && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-8 bg-slate-950/40 p-8 rounded-2xl border border-blue-500/10">
                <div>
                  <h4 className="text-xl font-bold text-blue-400 mb-3 flex items-center gap-2">
                    🎯 Core Strategy
                  </h4>
                  <p className="text-slate-300 leading-relaxed">{result.strategy}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-emerald-400 mb-3">🚀 Quick Wins</h4>
                    <ul className="space-y-3">
                      {result.quickWins.map((win, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-400">
                          <span className="mt-1 text-emerald-500 font-bold">✓</span>
                          {win}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-amber-400 mb-3">⚔️ Competitor Analysis</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{result.competitorAnalysis}</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-slate-800 text-center">
                  <p className="text-slate-500 text-sm italic">
                    Note: This is an AI-generated strategy. For a comprehensive execution plan, let's connect.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITool;
