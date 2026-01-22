
import React from 'react';

const TOOLS = [
  { name: 'Google Search Console', icon: '🔍', desc: 'Performance monitoring & indexing' },
  { name: 'Google Analytics 4 (GA4)', icon: '📈', desc: 'Behavior & conversion tracking' },
  { name: 'Screaming Frog', icon: '🐸', desc: 'Technical SEO & site crawling' },
  { name: 'Ahrefs / SEMrush', icon: '🚀', desc: 'Backlink analysis & keyword research' },
  { name: 'Looker Studio', icon: '📊', desc: 'Custom data visualization' },
  { name: 'ChatGPT & AI tools', icon: '✨', desc: 'AI-assisted SEO workflows' },
  { name: 'Excel / Google Sheets', icon: '📅', desc: 'Data manipulation & reporting' },
];

const ToolsSection: React.FC = () => {
  return (
    <section id="tools" className="py-24 bg-slate-950 relative reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">TOOLS & <span className="gradient-text">STACK</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Leveraging industry-standard technology to extract insights and drive precision growth.
          </p>
        </div>

        {/* 
          Using flex-wrap with justify-center and specific width calculations 
          to achieve the 4-3 centered layout on desktop.
          Max-width is increased to 7xl to cover more screen area.
        */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-7xl mx-auto">
          {TOOLS.map((tool, idx) => (
            <div 
              key={idx} 
              className="glass p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group hover:-translate-y-2 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] xl:w-[calc(25%-2rem)] text-center flex flex-col items-center justify-center min-h-[240px]"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block bg-white/5 p-4 rounded-2xl">
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-[220px]">
                {tool.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
