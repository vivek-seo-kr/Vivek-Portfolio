
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CaseStudySection from './components/CaseStudySection';
import ToolsSection from './components/ToolsSection';
import Footer from './components/Footer';
import { SERVICES, EXPERIENCE, PROCESS, TESTIMONIALS, EDUCATION, ACHIEVEMENTS, CERTIFICATIONS } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const openResumeInNewTab = () => {
    const resumeWindow = window.open('', '_blank');
    if (!resumeWindow) return;

    const resumeHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Vivek Kumar - Resume</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
        <style>
          * { box-sizing: border-box; -webkit-print-color-adjust: exact; }
          body { 
            font-family: 'Inter', -apple-system, sans-serif; 
            line-height: 1.4; 
            color: #000; 
            margin: 0; 
            padding: 40px 0; 
            background: #525659; 
          }
          .page { 
            background: white; 
            width: 210mm; 
            min-height: 297mm; 
            margin: 0 auto 20px; 
            padding: 20mm; 
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
            position: relative;
          }
          header { text-align: center; margin-bottom: 20px; }
          h1 { margin: 0 0 10px; font-size: 28pt; font-weight: 700; letter-spacing: 1px; }
          .summary { font-size: 10.5pt; color: #333; margin-bottom: 15px; max-width: 95%; margin-left: auto; margin-right: auto; text-align: center; }
          .contact-bar { 
            display: flex; 
            justify-content: center; 
            flex-wrap: wrap; 
            gap: 15px; 
            font-size: 9.5pt; 
            color: #000; 
            margin-bottom: 5px;
          }
          .contact-bar a { color: inherit; text-decoration: none; }
          .linkedin-bar { text-align: center; font-size: 9.5pt; margin-bottom: 20px; }
          .linkedin-bar a { color: inherit; text-decoration: none; }
          
          section { margin-bottom: 15px; }
          h2 { 
            font-size: 11pt; 
            font-weight: 700; 
            text-transform: uppercase; 
            color: #0088cc; 
            border-bottom: 1.5px solid #333; 
            padding-bottom: 2px; 
            margin: 15px 0 10px; 
          }
          
          .job-header { display: flex; justify-content: space-between; font-weight: 700; font-size: 10.5pt; margin-top: 10px; }
          .job-title-row { display: flex; justify-content: space-between; font-size: 10pt; margin-bottom: 5px; }
          .company-name { font-size: 11pt; font-weight: 700; }
          
          ul { margin: 0 0 10px; padding-left: 18px; font-size: 9.5pt; color: #222; }
          li { margin-bottom: 3px; position: relative; list-style-type: disc; }
          
          .skills-list li { margin-bottom: 6px; }
          .skills-list strong { font-weight: 700; }

          .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
          
          .print-btn { 
            position: fixed; 
            top: 20px; 
            right: 20px; 
            background: #2563eb; 
            color: white; 
            border: none; 
            padding: 10px 20px; 
            border-radius: 6px; 
            font-weight: 700; 
            cursor: pointer; 
            z-index: 100;
            box-shadow: 0 4px 6px rgba(0,0,0,0.3);
          }

          @media print {
            body { background: white; padding: 0; }
            .page { margin: 0; box-shadow: none; width: 100%; height: auto; }
            .print-btn { display: none; }
          }
        </style>
      </head>
      <body>
        <button class="print-btn" onclick="window.print()">Download as PDF</button>
        
        <div class="page">
          <header>
            <h1>VIVEK KUMAR</h1>
            <p class="summary">
              SEO professional with 8+ years of experience driving organic growth for real estate and B2B platforms. 
              Specialized in technical SEO, content strategy, schema, and conversion-focused optimisation, with a proven 
              record of achieving 138% organic traffic growth within 6 months. Experienced in scaling SEO for high-traffic 
              websites and aligning search strategy with business goals.
            </p>
            <div class="contact-bar">
              <span>✉️ techvivek09@gmail.com</span>
              <span>📞 +91-8800385860</span>
              <span>📍 New Delhi, India</span>
            </div>
            <div class="linkedin-bar">
              <a href="https://www.linkedin.com/in/vivek-kumar-a08125a2/">🔗 linkedin.com/in/vivek-kumar-a08125a2</a>
            </div>
          </header>

          <section>
            <h2>SKILLS</h2>
            <ul class="skills-list" style="list-style-type: none; padding-left: 0;">
              <li>• <strong>SEO Strategy & Organic Growth</strong> – roadmap planning, keyword & intent mapping, topic clusters, and conversion-focused SEO</li>
              <li>• <strong>AI-Driven & Generative Search Optimisation</strong> – AI-assisted research, entity-based SEO, content structuring for AI summarisation and answer engines</li>
              <li>• <strong>Technical SEO</strong> – large-scale audits, crawlability & index optimisation, schema & structured data, website migrations, internal linking, Core Web Vitals</li>
              <li>• <strong>Search Experience Optimisation (SXO)</strong> – UX-led SEO improvements aligned with engagement and lead generation</li>
              <li>• <strong>Analytics & Performance Measurement</strong> – Google Search Console, GA4, GTM, SEO performance analysis and insights</li>
              <li>• <strong>SEO Tooling & Competitive Research</strong> – Ahrefs, SEMrush, Screaming Frog for research, audits, and diagnostics</li>
            </ul>
          </section>

          <section>
            <h2>WORK EXPERIENCE</h2>
            
            <div class="company-block">
              <div class="job-header">
                <span class="company-name">IS Global Web</span>
              </div>
              <div class="job-title-row">
                <span class="job-title">Senior SEO Specialist</span>
                <span class="date">Sep 2023 - Present</span>
              </div>
              <ul>
                <li>Managed end-to-end SEO campaigns for multiple clients across competitive niches.</li>
                <li>Conducted in-depth technical SEO audits and implemented fixes to improve crawl efficiency and indexing.</li>
                <li>Implemented static and dynamic schema markup, improving SERP visibility and rich result appearance.</li>
                <li>Created and optimised webpage layouts from scratch to enhance user engagement and conversion rates.</li>
                <li>Identified content gaps using AI-assisted analysis and search intent mapping, launching new pages that led to significant organic traffic growth within a short period.</li>
                <li>Improved organic lead generation by optimising CTAs, landing pages, and sign-up flows, resulting in consistent daily organic leads.</li>
                <li>Executed advanced on-page optimisation including metadata, heading structure, internal linking, and UX-focused improvements.</li>
              </ul>
            </div>

            <div class="company-block">
              <div class="job-header">
                <span class="company-name">Square Yards</span>
              </div>
              <div class="job-title-row">
                <span class="job-title">Senior SEO Executive</span>
                <span class="date">Dec 2021 - Aug 2023</span>
              </div>
              <ul>
                <li>Worked with cross-functional tech and content teams to improve website structure, performance, and SEO scalability.</li>
                <li>Led keyword research using paid and free tools, mapping keywords to high-intent real estate and interior design funnels.</li>
                <li>Launched and scaled a new content section on InteriorCompany.com, using entity-based content structuring and AI-assisted topic planning, driving a 138% increase in organic traffic within 6 months.</li>
                <li>Regularly analysed user behaviour and performance trends using Google Analytics and Google Search Console.</li>
                <li>Conducted technical SEO analysis to improve crawlability, indexation, and site health.</li>
                <li>Optimised WordPress-based websites, improving site structure, UX, and content presentation.</li>
                <li>Implemented multiple schema types to enhance visibility in featured snippets and rich results.</li>
              </ul>
            </div>

            <div class="company-block">
              <div class="job-header">
                <span class="company-name">TradeIndia</span>
              </div>
              <div class="job-title-row">
                <span class="job-title">Senior SEO Executive</span>
                <span class="date">May 2019 - Dec 2021</span>
              </div>
              <ul>
                <li>Implemented SEO processes for multiple client websites.</li>
                <li>Conducted keyword research using Ahrefs and Google Keyword Planner.</li>
                <li>Managed web analytics using Google Analytics to guide optimisation strategies.</li>
                <li>Optimised content, images, and on-page elements to improve search visibility.</li>
                <li>Supported link-building and niche keyword targeting campaigns.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="page">
          <div class="company-block">
              <div class="job-header">
                <span class="company-name">Infoage Technology</span>
              </div>
              <div class="job-title-row">
                <span class="job-title">SEO Executive</span>
                <span class="date">2018 - 2019</span>
              </div>
              <ul>
                <li>Executed foundational SEO processes including keyword research, on-page optimisation, and analytics tracking.</li>
                <li>Supported content optimisation and link-building initiatives.</li>
                <li>Worked across multiple client websites in an agency environment.</li>
              </ul>
            </div>

          <section>
            <h2>EDUCATION</h2>
            <div class="job-header">
              <span class="company-name">Master of Business Administration (MBA)</span>
            </div>
            <ul style="list-style-type: none; padding-left: 0; margin-top: 5px;">
              <li>• Suresh Gyan Vihar University, Jaipur | 2022 – 2024</li>
            </ul>
          </section>

          <section>
            <h2>KEY ACHIEVEMENTS</h2>
            <ul>
              <li>Achieved 138% organic traffic growth within 6 months through content and technical SEO initiatives.</li>
              <li>Improved search visibility and keyword rankings for competitive commercial keywords.</li>
              <li>Independently managed complete website migration, including redirects, sitemap, robots.txt, and technical risk mitigation.</li>
              <li>Increased organic lead generation through CRO-aligned SEO improvements.</li>
            </ul>
          </section>

          <section>
            <h2>CERTIFICATE</h2>
            <ul style="list-style-type: none; padding-left: 0;">
              <li>Google Analytics Certification</li>
              <li>Google Tag Manager (Advanced Implementation)</li>
              <li>GA4 – Advanced Data Analysis & Reporting</li>
              <li>Foundations of Prompt Engineering (AWS)</li>
              <li>Introduction to Generative AI</li>
              <li>Applying Generative AI for Content & Search Optimisation</li>
            </ul>
          </section>

          <section>
            <h2>LANGUAGE</h2>
            <ul style="list-style-type: none; padding-left: 0;">
              <li><strong>English</strong> Proficient</li>
              <li><strong>Hindi</strong> Native</li>
            </ul>
          </section>
        </div>
      </body>
      </html>
    `;

    resumeWindow.document.write(resumeHtml);
    resumeWindow.document.close();
  };

  return (
    <div className="min-h-screen selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar onOpenResume={openResumeInNewTab} />
      
      <main>
        <section id="home">
          <Hero onOpenResume={openResumeInNewTab} />
        </section>

        {/* About & Philosophy */}
        <section id="about" className="py-24 bg-slate-900/20 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-black mb-8 italic">"SEO is not just traffic, <span className="gradient-text">it's revenue</span>."</h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                With over 8 years in the trenches, I build data-driven systems that turn organic search into a predictable, scalable lead generation engine. I don't chase vanity keywords; I chase business growth.
              </p>
            </div>
          </div>
        </section>

        {/* Core Competencies */}
        <section id="services" className="py-24 bg-slate-950 relative reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4">Core <span className="gradient-text">Competencies</span></h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Comprehensive organic search solutions designed for longevity, scalability, and measurable ROI.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service, idx) => (
                <div key={idx} className="glass p-8 rounded-3xl hover:-translate-y-2 transition-transform border border-slate-800 hover:border-blue-500/30">
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="py-24 bg-slate-900/30 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-black mb-16 text-center">Professional <span className="gradient-text">Journey</span></h2>
            <div className="max-w-3xl mx-auto space-y-12">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-blue-500 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                    <div className="w-0.5 flex-grow bg-slate-800 my-2"></div>
                  </div>
                  <div className="pb-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      <span className="text-blue-400/60 font-mono text-sm">{exp.period}</span>
                    </div>
                    <div className="text-blue-400 font-bold mb-4">{exp.company}</div>
                    <ul className="space-y-2">
                      {exp.points.map((point, pIdx) => (
                        <li key={pIdx} className="text-slate-400 text-sm flex items-start gap-2">
                          <span className="text-blue-500 font-bold mt-1">▹</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <CaseStudySection />

        {/* Tools & Stack */}
        <ToolsSection />

        {/* The Process */}
        <section id="process" className="py-24 bg-slate-950 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-black text-center mb-16">My Strategic <span className="gradient-text">Process</span></h2>
            <div className="grid md:grid-cols-4 gap-4">
              {PROCESS.map((p, i) => (
                <div key={i} className="relative p-8 glass rounded-2xl border border-white/5 overflow-hidden group">
                  <div className="text-6xl font-black text-blue-500/10 absolute -top-2 -right-2 group-hover:scale-110 transition-transform">{p.step}</div>
                  <h3 className="text-xl font-bold mb-4 relative z-10">{p.title}</h3>
                  <p className="text-slate-400 text-sm relative z-10">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-blue-600/5 reveal-on-scroll opacity-0 transition-all duration-1000">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="glass p-10 rounded-[2rem] border-white/10 relative">
                  <div className="text-4xl text-blue-500/20 absolute top-8 left-8">"</div>
                  <p className="text-lg text-slate-300 mb-6 relative z-10">{t.quote}</p>
                  <div className="font-bold text-white">— {t.author}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenResume={openResumeInNewTab} />

      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
};

export default App;
