import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: process.env.OPENAI_AI_API_KEY || '',
});

export const runtime = 'edge'

export async function POST(req: Request, res: Response) {
  const { messages } = await req.json();
  console.log('message:', messages);

  const response = await  openai.chat.completions.create({
    model: "gpt-3.5-turbo-1106",
    messages:[{
      role:"system",
       content:"You are a student"
      },
      ...messages,
    ],
    stream: true,
    temperature: 1
  })
}

