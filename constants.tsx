
import React from 'react';
import { CaseStudy, Service } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Scaling a New Content Section",
    client: "Square Yards / InteriorCompany",
    metric: "+138%",
    description: "Built a content engine using entity-based mapping to dominate niche authority.",
    details: [
      { label: "Problem", value: "Low organic visibility and limited topical authority." },
      { label: "Action", value: "Planned entity-based content, optimized internal linking, and aligned content with search intent." },
      { label: "Result", value: "138% increase in organic traffic within 6 months." }
    ],
    tags: ["Entity SEO", "Content Strategy", "Internal Linking"],
    chartData: [
      { name: 'Month 1', traffic: 1000 },
      { name: 'Month 2', traffic: 1150 },
      { name: 'Month 3', traffic: 1400 },
      { name: 'Month 4', traffic: 1850 },
      { name: 'Month 5', traffic: 2100 },
      { name: 'Month 6', traffic: 2380 },
    ]
  },
  {
    title: "Improving SEO Performance on Large Websites",
    client: "Enterprise Web Platforms",
    metric: "Steady Growth",
    description: "Technical optimization for large-scale platforms to fix crawl budget waste.",
    details: [
      { label: "Problem", value: "Crawl inefficiencies and underperforming pages." },
      { label: "Action", value: "Conducted technical audits, improved internal linking, and optimized key pages." },
      { label: "Result", value: "Better indexing, improved rankings, and steady traffic growth." }
    ],
    tags: ["Technical SEO", "Crawl Optimization", "Indexing"],
    chartData: [
      { name: 'Jan', traffic: 5000 },
      { name: 'Feb', traffic: 5200 },
      { name: 'Mar', traffic: 5800 },
      { name: 'Apr', traffic: 6100 },
      { name: 'May', traffic: 6500 },
      { name: 'Jun', traffic: 7200 },
    ]
  }
];

export const SERVICES: Service[] = [
  {
    title: "Technical SEO",
    description: "Large-scale audits, crawlability & index optimisation, schema & structured data, website migrations, and Core Web Vitals.",
    icon: "⚙️"
  },
  {
    title: "AI-Driven & Generative Search",
    description: "AI-assisted research, entity-based SEO, and content structuring for AI summarisation and answer engines.",
    icon: "✨"
  },
  {
    title: "Search Experience (SXO)",
    description: "UX-led SEO improvements aligned with engagement and lead generation to improve overall conversion rates.",
    icon: "🔗"
  },
  {
    title: "Strategy & Organic Growth",
    description: "Roadmap planning, keyword & intent mapping, topic clusters, and conversion-focused SEO systems.",
    icon: "🔍"
  },
  {
    title: "Analytics & Performance",
    description: "Google Search Console, GA4, GTM, and custom data visualization for performance analysis and insights.",
    icon: "📊"
  },
  {
    title: "SEO Tooling & Research",
    description: "Proficiency in Ahrefs, SEMrush, Screaming Frog, and more for deep-dive research and diagnostics.",
    icon: "🛠️"
  }
];

export const EXPERIENCE = [
  {
    role: "Senior SEO Specialist",
    company: "IS Global Web",
    period: "Sep 2023 - Present",
    points: [
      "Managed end-to-end SEO campaigns for multiple clients across competitive niches.",
      "Conducted in-depth technical SEO audits and implemented fixes to improve crawl efficiency and indexing.",
      "Implemented static and dynamic schema markup, improving SERP visibility and rich result appearance.",
      "Created and optimised webpage layouts from scratch to enhance user engagement and conversion rates.",
      "Identified content gaps using AI-assisted analysis and search intent mapping.",
      "Improved organic lead generation by optimising CTAs, landing pages, and sign-up flows."
    ]
  },
  {
    role: "Senior SEO Executive",
    company: "Square Yards",
    period: "Dec 2021 - Aug 2023",
    points: [
      "Worked with cross-functional tech and content teams to improve website structure and scalability.",
      "Led keyword research using paid and free tools, mapping keywords to high-intent funnels.",
      "Launched a new content section on InteriorCompany.com, driving 138% organic traffic growth in 6 months.",
      "Optimised WordPress-based websites, improving site structure, UX, and content presentation.",
      "Implemented multiple schema types to enhance visibility in featured snippets and rich results."
    ]
  },
  {
    role: "Senior SEO Executive",
    company: "TradeIndia",
    period: "May 2019 - Dec 2021",
    points: [
      "Implemented SEO processes for multiple client websites.",
      "Conducted keyword research using Ahrefs and Google Keyword Planner.",
      "Managed web analytics using Google Analytics to guide optimisation strategies.",
      "Optimised content, images, and on-page elements to improve search visibility."
    ]
  },
  {
    role: "SEO Executive",
    company: "Infoage Technology",
    period: "2018 - 2019",
    points: [
      "Executed foundational SEO processes including keyword research and on-page optimisation.",
      "Supported content optimisation and link-building initiatives.",
      "Worked across multiple client websites in an agency environment."
    ]
  }
];

export const EDUCATION = [
  {
    degree: "Master of Business Administration (MBA)",
    institution: "Suresh Gyan Vihar University, Jaipur",
    period: "2022 – 2024"
  }
];

export const ACHIEVEMENTS = [
  "Achieved 138% organic traffic growth within 6 months through content and technical SEO initiatives.",
  "Improved search visibility and keyword rankings for competitive commercial keywords.",
  "Independently managed complete website migration, including redirects, sitemap, and risk mitigation.",
  "Increased organic lead generation through CRO-aligned SEO improvements."
];

export const CERTIFICATIONS = [
  "Google Analytics Certification",
  "Google Tag Manager (Advanced Implementation)",
  "GA4 – Advanced Data Analysis & Reporting",
  "Foundations of Prompt Engineering (AWS)",
  "Introduction to Generative AI",
  "Applying Generative AI for Content & Search Optimisation"
];

export const PROCESS = [
  { step: "01", title: "Discovery & Audit", desc: "Deep dive into your technical setup, current rankings, and historical data." },
  { step: "02", title: "Strategy & Mapping", desc: "Creating a data-driven roadmap focused on high-intent conversion keywords." },
  { step: "03", title: "Execution", desc: "Coordinating content production, technical fixes, and authority building." },
  { step: "04", title: "Scale & Optimize", desc: "Continuous monitoring and refining based on real-time ranking shifts." }
];

export const TESTIMONIALS = [
  { quote: "Vivek's technical audit was a game changer. We recovered 30% of traffic lost in the last core update.", author: "Sarah J., Head of Growth" },
  { quote: "The ROI we've seen from his topic cluster strategy is unlike any other SEO we've worked with.", author: "Michael R., SaaS Founder" }
];
