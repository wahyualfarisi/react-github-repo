import { rest } from 'msw';
import userResponse from './user.json';
import repoResponse from './repo.json'

// const serverApi = rest.link('https://api.github.com');
const BASE_URL = "https://api.github.com"
export const handlers = [
    rest.get(`${BASE_URL}/users/:name`, (req, res, ctx) => {
        ctx.delay(9000)
        return res(
            ctx.status(200),
            ctx.json(userResponse)
        )
    }),

    rest.get(`${BASE_URL}/users/:name/repos`, (req, res, ctx) => {
        ctx.delay(2000);

        return res(
            ctx.status(200),
            ctx.json(repoResponse)
        )
    })
];