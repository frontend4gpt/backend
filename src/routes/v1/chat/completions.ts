import { ChatCompletionRequestMessage } from 'openai';
import { type Env } from '../../../@types/Env';
import { OpenAI } from '../../../structures/OpenAI';
import { Route } from '../../../structures/Route';
import { model } from '../../../util/Constants';

export class ChatCompletions extends Route {
    public constructor(env: Env) {
        super(env);
    }

    public async post(request: Request, baseHeaders: HeadersInit) {
        const messages = JSON.parse(await request.text()) as ChatCompletionRequestMessage[];

        const output = await new OpenAI(this.env).createChatCompletion({
            model: model,
            messages: messages,
        });


        return new Response(output.data.choices[0].message?.content, {
            headers: baseHeaders,
            status: 500,
        });
    }
}
