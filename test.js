// test.js
import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({
  apiKey: "AIzaSyAncyiwr_irqb8d47CS-VCsFeR_cXpXNdo",
});

async function runChat(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

  const chat = model.startChat();

  const result = await chat.sendMessage(prompt);
  const response = result.response;
  console.log("✅ Response:\n", response.text());
}

runChat("What is the capital of India?");
