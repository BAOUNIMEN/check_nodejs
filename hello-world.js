console.log('HELLO WORLD')
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
//readin file welcome.txt
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
const fs = require('fs/promises');

async function example() {
  try {
    const data = await fs.readFile('welcome.txt', { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
example();
