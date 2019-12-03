import http from 'http';
import { CommandCheck } from './command';
import { CognitoLogin } from './login';
require('dotenv').config();

// @ts-ignore
global.fetch = require('node-fetch');

const command = CommandCheck();

if (process.env.RCC_USER_POOL_ID === undefined) {
  throw new Error('process.env.RCC_USER_POOL_ID is undefined\r\n');
}
if (process.env.RCC_CLIENT_ID === undefined) {
  throw new Error('process.env.RCC_CLIENT_ID is undefined\r\n');
}
if (process.env.RCC_USER_NAME === undefined) {
  throw new Error('process.env.RCC_USER_NAME is undefined\r\n');
}
if (process.env.RCC_PASSWORD === undefined) {
  throw new Error('process.env.RCC_PASSWORD is undefined\r\n');
}

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  (async () => {
    if (req.url === '/login' && req.method === 'GET') {
      return CognitoLogin();
    } else {
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
