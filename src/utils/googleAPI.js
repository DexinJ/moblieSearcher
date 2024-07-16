import { GoogleGenerativeAI } from "@google/generative-ai";

const GOOGLEAPI = "";

const genAI = new GoogleGenerativeAI(GOOGLEAPI);

async function runAI(image) {
  // For text-and-images input (multimodal), use the gemini-pro-vision model
  console.log(image);
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const prompt =
    "list the food in this picture with comma between each of them";

  const result = await model.generateContent([prompt, image]);
  const response = await result.response;
  const text = response.text();
  return text;
}

export { runAI };
