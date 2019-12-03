import http from 'http';

const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  console.log(req.url);
  console.log(req.method);
  res.end('Hello World.');
});

server.listen(port, hostName, () => {
  console.log('Cognito Authentication Server running.');
  console.log(`http://${hostName}:${port}`);
});
