
import { GoogleGenAI, Type } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async generateSEOStrategy(niche: string, websiteUrl: string = "not provided") {
    const response = await this.ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Act as a Senior SEO Consultant with 15 years experience. Generate a concise 1-page SEO strategy for a business in the ${niche} niche (Website: ${websiteUrl}). Provide specific, actionable advice.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            strategy: { type: Type.STRING, description: "Broad strategic overview." },
            quickWins: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "List of 3-4 quick wins."
            },
            competitorAnalysis: { type: Type.STRING, description: "Analysis of how to beat competitors in this niche." }
          },
          required: ["strategy", "quickWins", "competitorAnalysis"]
        }
      }
    });

    return JSON.parse(response.text);
  }
}

export const gemini = new GeminiService();
