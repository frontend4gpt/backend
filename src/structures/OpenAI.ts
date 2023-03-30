import { OpenAIApi } from 'openai';
import { Configuration } from 'openai/dist/configuration';
import type { Env } from '../@types/Env';

let client: OpenAIApi | null = null;

export class OpenAI extends OpenAIApi {
    constructor(env: Env) {
        if (client === null) {
            const config = new Configuration({
                apiKey: env.OPENAI_API_KEY,
            });

            super(config);

            client = this;
        }

        // eslint-disable-next-line no-constructor-return
        return client;
    }
}
