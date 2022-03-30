import { createServer } from '@marblejs/http';
import { IO } from 'fp-ts/lib/IO'
import { listener } from './listeners/http.listener';

const server = createServer({
    port: 4000,
    hostname: '0.0.0.0',
    listener
})

const main: IO<void> = async () => {
    await (await server)()
}

main()