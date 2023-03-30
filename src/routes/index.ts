import { type Env } from '../@types/Env';
import { type Route } from '../structures/Route';
import { ChatCompletions } from './v1/chat/completions';

export const routes = {
    '/v1/chat/completions': ChatCompletions,
} as {
    '/v1/chat/completions': new (env: Env) => ChatCompletions,
    [key: string]: (new (env: Env) => Route) | undefined,
};