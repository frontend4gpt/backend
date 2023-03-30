import { type Env } from './@types/Env';
import { RouteHandler } from './structures/RouteHandler';
import { baseHeaders } from './util/Constants';

let routeHandler: RouteHandler;

export default {
    fetch: async (request: Request, env: Env) => {
        const origin = request.headers.get('Origin');

        const headers = baseHeaders(origin);

        routeHandler ??= new RouteHandler(headers, env);

        return routeHandler.handle(request);
    },
};
