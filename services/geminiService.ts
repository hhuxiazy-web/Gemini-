
import { GoogleGenAI, Type } from "@google/genai";
import type { LearningPlan } from '../types';

const learningPlanSchema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING, description: "A concise and inspiring title for the learning plan." },
    introduction: { type: Type.STRING, description: "A brief, encouraging introduction for the student." },
    phases: {
      type: Type.ARRAY,
      description: "An array of learning phases, structured chronologically.",
      items: {
        type: Type.OBJECT,
        properties: {
          phaseNumber: { type: Type.INTEGER, description: "The sequential number of the phase, starting from 1." },
          title: { type: Type.STRING, description: "The title of this learning phase (e.g., 'Python Fundamentals')." },
          duration: { type: Type.STRING, description: "The estimated duration for this phase (e.g., '4 Weeks')." },
          goals: {
            type: Type.ARRAY,
            description: "A list of key learning objectives for this phase.",
            items: { type: Type.STRING },
          },
          topics: {
            type: Type.ARRAY,
            description: "A list of specific topics to study within this phase.",
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING, description: "The name of the topic." },
                details: {
                  type: Type.ARRAY,
                  description: "A list of bullet points detailing what to learn about this topic.",
                  items: { type: Type.STRING },
                },
                resources: {
                  type: Type.ARRAY,
                  description: "A list of recommended learning resources (e.g., specific libraries, tutorials, books).",
                  items: { type: Type.STRING },
                },
              },
              required: ["name", "details", "resources"],
            },
          },
          project: {
            type: Type.OBJECT,
            description: "A hands-on project to consolidate learning from this phase.",
            properties: {
              title: { type: Type.STRING, description: "The title of the mini-project." },
              description: { type: Type.STRING, description: "A brief description of the project goal." },
            },
            required: ["title", "description"],
          },
        },
        required: ["phaseNumber", "title", "duration", "goals", "topics", "project"],
      },
    },
    conclusion: { type: Type.STRING, description: "A concluding paragraph with next steps and encouragement." },
  },
  required: ["title", "introduction", "phases", "conclusion"],
};

export const generateLearningPlan = async (userPrompt: string): Promise<LearningPlan> => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const systemInstruction = `You are an expert curriculum designer and senior engineer specializing in AI applications for power systems. Your task is to create a detailed, structured, and actionable learning plan for a student transitioning into graduate research in this field. The plan must be highly practical, guiding the student from zero programming knowledge to being able to conduct simulations for their research. The output must be in JSON format according to the provided schema.`;
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      contents: [
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: learningPlanSchema,
        temperature: 0.5,
      },
    });

    const jsonText = response.text.trim();
    if (!jsonText) {
      throw new Error("Received an empty response from the API.");
    }
    
    // The response text should already be valid JSON due to responseSchema
    const plan: LearningPlan = JSON.parse(jsonText);
    return plan;

  } catch (error) {
    console.error("Error generating learning plan:", error);
    throw new Error("Failed to generate the learning plan. The model may be unavailable or the request timed out. Please check your API key and try again.");
  }
};
