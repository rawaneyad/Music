const http = require('http');
const router = require('./router');

const host = 'localhost';
const port = '8888';

 const server = http.createServer(router);

 server.listen(port,()=> {
     console.log('server listen in http://localhost:8888');
 })