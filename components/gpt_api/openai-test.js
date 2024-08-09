import OpenAI from "openai";
import readline from 'readline';

const openai = new OpenAI();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

  let messages = [{ role: "system", content: "You are a helpful assistant." }];

  async function chat() {
    rl.question("You: ", async (input) => {
      messages.push({ role: "user", content: input });
  
      const completion = await openai.chat.completions.create({
        messages: messages,
        model: "gpt-3.5-turbo-1106",
      });

      const response = completion.choices[0].message.content;
      console.log(`Assistant: ${response}`);
      messages.push({ role: "assistant", content: response });
      chat();
    });
  }
  
  chat();