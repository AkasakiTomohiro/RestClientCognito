"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const command_1 = require("./command");
const login_1 = require("./login");
require('dotenv').config();
// @ts-ignore
global.fetch = require('node-fetch');
const command = command_1.CommandCheck();
const server = http_1.default.createServer((req, res) => {
    (async () => {
        if (req.url === '/login' && req.method === 'GET') {
            return login_1.CognitoLogin();
        }
        else {
            throw new Error('uri miss match');
        }
    })()
        .then(data => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    })
        .catch(err => {
        res.statusCode = 500;
        res.end(err);
    });
});
server.listen(command.port, '127.0.0.1', () => {
    console.log('Cognito Authentication Server running.');
    console.log(`http://127.0.0.1:${command.port}`);
});
