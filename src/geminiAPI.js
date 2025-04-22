import { GoogleGenAI } from "@google/genai";


const ai = new GoogleGenAI({ apiKey: "AIzaSyAhqXLCtH6wqR8PriAoxsi_jGZ-KYUfV10" });

export const generateRolePlay = async (res, req) => {
  res = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works",
  });
  console.log(response.text);
}

await generateRolePlay();