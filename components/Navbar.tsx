import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Expertise', href: '#services' },
  { name: 'History', href: '#experience' },
  { name: 'Results', href: '#case-studies' },
  { name: 'Stack', href: '#tools' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' }
];

interface NavbarProps {
  onOpenResume: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Handle background change
      setIsScrolled(window.scrollY > 50);

      // Handle scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Scroll Spy logic - tracking all main section IDs in order
      const sections = ['about', 'services', 'experience', 'case-studies', 'tools', 'process', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust detection threshold for better accuracy
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem ? elem.offsetTop - 80 : 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-3 border-b border-white/5 shadow-2xl shadow-blue-500/5' : 'bg-transparent py-6'}`}>
        {/* Progress Bar */}
        <div 
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-emerald-400 transition-all duration-150 ease-out z-50"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold font-heading tracking-tight group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-blue-500 group-hover:text-emerald-400 transition-colors">Vivek Kumar</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-6 items-center font-medium text-slate-400 text-sm">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative transition-all duration-300 hover:text-white ${activeSection === link.href.replace('#', '') ? 'text-blue-400 font-bold' : ''}`}
              >
                {link.name}
                {activeSection === link.href.replace('#', '') && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                )}
              </a>
            ))}
            <button 
              onClick={onOpenResume}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full transition-all shadow-lg shadow-blue-500/20 text-sm font-bold ml-4"
            >
              Resume
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0 translate-x-10' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div className={`fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-bold">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`transition-colors ${activeSection === link.href.replace('#', '') ? 'text-blue-500' : 'text-slate-400'}`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onOpenResume}
            className="mt-4 px-10 py-4 bg-blue-600 rounded-2xl text-white shadow-xl shadow-blue-500/20"
          >
            Resume
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;