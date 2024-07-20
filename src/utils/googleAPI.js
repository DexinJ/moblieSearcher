import { GoogleGenerativeAI } from "@google/generative-ai";
import { REACT_APP_GOOGLE_API } from "@env";

const API = REACT_APP_GOOGLE_API;
const genAI = new GoogleGenerativeAI(API);

async function runAI(image) {
  // For text-and-images input (multimodal), use the gemini-pro-vision model
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt =
    "list the different food in this picture with a comma between each of them";

  const result = await model.generateContent([prompt, image]);
  const response = await result.response;
  const text = response.text();
  return text;
}

export { runAI };
