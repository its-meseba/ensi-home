// app/api/chatbot/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Parse the request body
  const { message } = await request.json();

  // Return a hardcoded response
  const dummyResponse = {
    response: `You said: ${message}. This is a dummy response.`,
  };

  return NextResponse.json(dummyResponse);
}

// // app/api/chatbot/route.ts
// import { NextResponse } from 'next/server';
// import { Configuration, OpenAIApi } from 'openai';

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY, // Make sure to set this in your environment variables
// });

// const openai = new OpenAIApi(configuration);

// export async function POST(request: Request) {
//   try {
//     // Parse the request body
//     const { message } = await request.json();

//     if (!message) {
//       return NextResponse.json(
//         { error: 'Message is required.' },
//         { status: 400 }
//       );
//     }

//     // Integrate with OpenAI's API
//     const completion = await openai.createCompletion({
//       model: 'text-davinci-003',
//       prompt: `User: ${message}\nAI Assistant:`,
//       max_tokens: 150,
//       temperature: 0.7,
//     });

//     const aiResponse = completion.data.choices[0].text?.trim();

//     return NextResponse.json({ response: aiResponse });
//   } catch (error) {
//     console.error('Error in /api/chatbot:', error);

//     return NextResponse.json(
//       { error: 'An error occurred while processing your request.' },
//       { status: 500 }
//     );
//   }
// }
