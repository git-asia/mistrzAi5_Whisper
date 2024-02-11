import { API_KEY } from "./config";
import OpenAI from "openai";
import { createReadStream } from 'fs';

(async () => {
    const client = new OpenAI({
        apiKey: API_KEY,
    });

    const text = await client.audio.transcriptions.create({
        model: 'whisper-1',
        response_format: 'text',
        language: 'pl',
        file: createReadStream('./synthesis.wav'),
    }) as unknown as string;

    console.log(text);
})();