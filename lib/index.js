"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const command_1 = require("./command");
const hostName = '127.0.0.1';
const command = command_1.CommandCheck();
if (command.help) {
}
else {
    const server = http_1.default.createServer((req, res) => {
        console.log(req.url);
        console.log(req.method);
        res.end('Hello World.');
    });
    server.listen(command.port, hostName, () => {
        console.log('Cognito Authentication Server running.');
        console.log(`http://${hostName}:${command.port}`);
    });
}