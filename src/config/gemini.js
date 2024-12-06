import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const getResponse = async (prompt) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const chatSession = model.startChat({
      generationConfig: {
        temperature: 1,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
      },
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    console.log(result.response);
  } catch (error) {
    console.error("Error fetching Gemini API:", error);
  }
};

export default getResponse;
