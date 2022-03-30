import { logger$ } from '@marblejs/middleware-logger'
import { bodyParser$ } from '@marblejs/middleware-body'
import { httpListener } from '@marblejs/http';
import { api$ } from '../effects/api$'

const middlewares = [
    logger$(),
    bodyParser$()
]

const effects = [
    api$
]

export const listener = httpListener({
    middlewares,
    effects
})