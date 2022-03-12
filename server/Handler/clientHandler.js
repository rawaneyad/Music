const path = require('path');
const fs = require('fs');

const clientHandler = (endpoint, res)=>{
    const filePath = path.join(__dirname, '..', '..', 'client', endpoint);
    const extention = path.extname(endpoint);

  const contentType = {
    '.js': 'text/js',
    '.css': 'text/css',
    '.html': 'text/html',
  };
    fs.readFile(filePath, (err, file) => {
      if (err) {
        res.writeHead(500);
        res.end('server error');
      } else {
        res.writeHead(200, { 'Content-type': contentType[extention] });
        res.end(file);
      }
    });
}
module.exports = clientHandler;