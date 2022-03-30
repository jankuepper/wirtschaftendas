"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listener = void 0;
const middleware_logger_1 = require("@marblejs/middleware-logger");
const middleware_body_1 = require("@marblejs/middleware-body");
const http_1 = require("@marblejs/http");
const api_1 = require("../effects/api$");
const middlewares = [
    (0, middleware_logger_1.logger$)(),
    (0, middleware_body_1.bodyParser$)()
];
const effects = [
    api_1.api$
];
exports.listener = (0, http_1.httpListener)({
    middlewares,
    effects
});
