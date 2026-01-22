
import React from 'react';

interface FooterProps {
  onOpenResume: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  return (
    <footer id="contact" className="py-20 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Let's Rank <span className="gradient-text">Higher</span> Together.</h2>
            <p className="text-slate-400 text-lg mb-8 max-w-md">
              Available for full-scale SEO management, audits, or high-level strategic consulting. 
            </p>
            <div className="space-y-6">
              <a href="mailto:techvivek09@gmail.com" className="flex items-center gap-4 text-lg md:text-xl font-semibold hover:text-blue-400 transition-colors">
                <span className="w-12 h-12 glass rounded-full flex items-center justify-center text-blue-400 flex-shrink-0">📧</span>
                techvivek09@gmail.com
              </a>
              
              <a href="https://www.linkedin.com/in/vivek-kumar-a08125a2/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg md:text-xl font-semibold hover:text-blue-400 transition-colors">
                <span className="w-12 h-12 glass rounded-full flex items-center justify-center text-blue-400 flex-shrink-0">🔗</span>
                LinkedIn Profile
              </a>

              <button 
                onClick={onOpenResume}
                className="flex items-center gap-4 text-lg md:text-xl font-semibold hover:text-blue-400 transition-colors text-left"
              >
                <span className="w-12 h-12 glass rounded-full flex items-center justify-center text-blue-400 flex-shrink-0">📄</span>
                Download Resume
              </button>

              <div className="flex items-center gap-4 text-lg md:text-xl font-semibold">
                <span className="w-12 h-12 glass rounded-full flex items-center justify-center text-blue-400 flex-shrink-0">📍</span>
                Remote / Worldwide
              </div>
            </div>
          </div>
          
          <div className="glass p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-all"
              />
              <input 
                type="email" 
                placeholder="Work Email" 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-all"
              />
              <textarea 
                rows={4} 
                placeholder="How can I help you grow?" 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-all"
              ></textarea>
              <button className="w-full py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-blue-500 hover:text-white transition-all">
                Submit Request
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <div>© 2024 Vivek Kumar. Built with ⚡ & Gemini AI.</div>
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/vivek-kumar-a08125a2/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter (X)</a>
            <a href="#" className="hover:text-white transition-colors">Clutch.co</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
