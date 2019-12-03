import http from 'http';
import { CommandCheck } from './command';

const hostName = '127.0.0.1';

const command = CommandCheck();

if (command.help) {
} else {
  const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    console.log(req.url);
    console.log(req.method);
    res.end('Hello World.');
  });

  server.listen(command.port, hostName, () => {
    console.log('Cognito Authentication Server running.');
    console.log(`http://${hostName}:${command.port}`);
  });
}
