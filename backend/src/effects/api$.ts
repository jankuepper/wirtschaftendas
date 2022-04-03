import { r } from '@marblejs/http';
import { map } from 'rxjs/operators';

export const api$ = r.pipe(
    r.matchPath('/'),
    r.matchType('GET'),
    r.useEffect(req$ => req$.pipe(
        map(() => ({body: JSON.stringify({'Hello':'World!'})}))
    ))
)