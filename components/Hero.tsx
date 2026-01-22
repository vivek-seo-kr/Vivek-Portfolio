
import React from 'react';

interface HeroProps {
  onOpenResume: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-6 tracking-wide uppercase">
              Vivek Kumar
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1]">
              <span className="gradient-text">Senior SEO Specialist</span> | 8+ Years of Experience
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
              I help businesses grow organic traffic, leads, and revenue through data-driven, scalable SEO strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onOpenResume}
                className="px-8 py-4 bg-white text-slate-950 rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg shadow-white/5"
              >
                📄 View / Download Resume
              </button>
              <a href="#contact" className="px-8 py-4 glass text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                👉 Contact Me
              </a>
            </div>
          </div>

          {/* Right Image Content - Circular with Glow */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative z-10 w-full max-w-[420px] aspect-square rounded-full group p-2">
              {/* Animated Glow Border / Lighting */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-emerald-400 to-blue-600 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-spin-slow"></div>
              
              {/* Main Circular Image Frame */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-white/10 glass glow-active z-20 bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                  alt="Vivek - Senior SEO Specialist"
                  className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  onError={(e) => {
                    // Fallback to original unsplash if local reference isn't found
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] pointer-events-none"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-2 -right-2 md:bottom-8 md:right-8 glass p-3 md:p-4 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xl animate-bounce-subtle z-30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-xl shadow-lg shadow-blue-500/40">📈</div>
                  <div className="hidden sm:block">
                    <div className="text-sm font-bold text-white whitespace-nowrap">Vivek Kumar</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-tighter">SEO Expert</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Light Spill */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Avg. Traffic Growth', value: '138%' },
            { label: 'Technical Audits', value: '50+' },
            { label: 'Client Retention', value: '95%' },
            { label: 'Years Experience', value: '8+' }
          ].map((stat, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-colors">
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400 uppercase tracking-widest font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
