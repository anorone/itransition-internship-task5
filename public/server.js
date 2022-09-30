import mysql from 'mysql';
import http from 'http';
import fs from 'fs';

const dbClient = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password_123',
});

http.createServer((request, response) => {
  const url = request.url;

  if (url === '/') {
    fs.readFile('index.html', (err, html) => {
      if (err) {
        throw err;
      }
      response.writeHead(200, { 'Content-Type': 'text/html'});
      response.end(html);
    });
  }

  if (url.startsWith('/handler')) {
    // read from database
  }

  if (url.startsWith('/post')) {
    // write to database
  }
}).listen(3000);
