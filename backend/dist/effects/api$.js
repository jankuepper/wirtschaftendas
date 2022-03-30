"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api$ = void 0;
const http_1 = require("@marblejs/http");
const operators_1 = require("rxjs/operators");
exports.api$ = http_1.r.pipe(http_1.r.matchPath('/'), http_1.r.matchType('GET'), http_1.r.useEffect(req$ => req$.pipe((0, operators_1.mapTo)({ body: JSON.stringify({ 'Hello': 'World!' }) }))));
