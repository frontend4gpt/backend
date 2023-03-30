export const baseHeaders = (origin: string | null) => (
    origin && origins.includes(origin)
        ? { 'Access-Control-Allow-Origin': origin, Vary: 'Origin' }
        : {} as HeadersInit
);

export const model = 'gpt-3.5-turbo';

export const origins = [
    'https://btn.attituding.xyz',
    'https://btn.attituding.workers.dev',
    'http://localhost:3000',
];