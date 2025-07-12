// gemini.js  – CommonJS or ESM works the same with this SDK
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyC8NeGhwz1svbsRZkotiIQwKI3XpJAcoaI";

// • choose a model id that still exists
const MODEL_ID = "gemini-2.5-pro";       // text‑only, long context
// or  "gemini-1.5-flash"                // cheaper / faster
// or  "gemini-pro-vision"               // multimodal

const genAI = new GoogleGenerativeAI(API_KEY);
const model  = genAI.getGenerativeModel({ model: MODEL_ID });

export default async function runChat(prompt) {
  const chat = model.startChat();        // your old generationConfig & safetySettings still fit here
  const { response } = await chat.sendMessage(prompt);
  console.log(response.text());
  return response.text();
}

runChat("Quick sanity test: 2 + 2 = ?");
