
export interface CaseStudy {
  title: string;
  client: string;
  metric: string;
  description: string;
  details: { label: string; value: string }[];
  tags: string[];
  chartData: { name: string; traffic: number }[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface AIResponse {
  strategy: string;
  quickWins: string[];
  competitorAnalysis: string;
}