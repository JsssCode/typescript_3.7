import * as http from 'http';
import * as info from './person';

const srv = http.createServer(function (request, response) {  // Send HTTP headers and body with status 200 (meaning success)  
    response.writeHead(200, { 'Content-Type': 'text/html' }); response.end(` 
       <html><body>      <h1>Hello, world!</h1>  </body&gt;</html>`);
}).listen(1234);


const options = {
    host: '127.0.0.1',
    port: 1234,
    path: '/'
  };
