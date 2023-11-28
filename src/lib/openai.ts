import OpenAI from "openai";

export const correctGrammar = async (text: string) => {
    try {
        const openAi = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true });

        const completion = await openAi.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You will be provided with statements, and your task is to convert them to standard English." },
                { role: "user", content: text }
            ]
        });

        return completion.choices[0].message;
    } catch {
        throw new Error("Failed to fetch data from the open ai api.");
    }
};