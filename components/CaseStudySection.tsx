
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CASE_STUDIES } from '../constants';

const CaseStudySection: React.FC = () => {
  return (
    <section id="case-studies" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-4">KEY <span className="gradient-text">CASE STUDIES</span></h2>
            <p className="text-slate-400 text-lg">No vanity metrics. Just real business growth through surgical SEO execution.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {CASE_STUDIES.map((study, idx) => (
            <div key={idx} className="glass rounded-3xl p-8 flex flex-col hover:border-blue-500/30 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{study.title}</h3>
                  <p className="text-blue-400 font-medium">{study.client}</p>
                </div>
                <div className="text-4xl font-black text-emerald-400">{study.metric}</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {study.details.map((detail, dIdx) => (
                  <li key={dIdx} className="text-slate-400 text-sm flex items-start gap-2 leading-relaxed">
                    <span className="text-blue-500 font-bold mt-1">▹</span>
                    <span>
                      <strong className="text-slate-200">{detail.label}:</strong> {detail.value}
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="h-64 w-full mb-8 bg-slate-950/50 rounded-2xl p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={study.chartData}>
                    <defs>
                      <linearGradient id={`colorTraffic-${idx}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="name" stroke="#475569" fontSize={12} />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px' }}
                      itemStyle={{ color: '#60a5fa' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="traffic" 
                      stroke="#3b82f6" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill={`url(#colorTraffic-${idx})`} 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {study.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;