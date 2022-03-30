"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("@marblejs/http");
const http_listener_1 = require("./listeners/http.listener");
const server = (0, http_1.createServer)({
    port: 4000,
    hostname: '0.0.0.0',
    listener: http_listener_1.listener
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (yield server)();
});
main();
