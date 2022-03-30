import { r } from '@marblejs/http';
import { mapTo } from 'rxjs/operators';

export const api$ = r.pipe(
    r.matchPath('/'),
    r.matchType('GET'),
    r.useEffect(req$ => req$.pipe(
        mapTo({body: JSON.stringify({'Hello':'World!'})})
    ))
)