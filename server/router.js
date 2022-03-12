const https = require('https');
const clientHandler = require('./Handler/clientHandler');

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    clientHandler('/HTML/index.html',res);
    // const filePath = path.join(__dirname, '..', 'client', 'HTML', 'index.html');
    // fs.readFile(filePath, (err, file) => {
    //   if (err) {
    //     res.writeHead(500);
    //     res.end('server error');
    //   } else {
    //     res.writeHead(200, { 'Content-type': 'text/html' });
    //     res.end(file);
    //   }
    // });
  } else if (endpoint === '/CSS/style.css' || endpoint === '/JS/dom.js' || endpoint === '/JS/xhr.js') {
    clientHandler(endpoint,res);
    // const filePath = path.join(__dirname, '..', 'client', 'CSS', 'style.css');
    // fs.readFile(filePath, (err, file) => {
    //   if (err) {
    //     res.writeHead(500);
    //     res.end('server error');
    //   } else {
    //     res.writeHead(200, { 'Content-type': 'text/css' });
    //     res.end(file);
    //   }
    // });
  // } else if (endpoint === '/JS/dom.js') {
  //   clientHandler(endpoint,res);
    // const filePath = path.join(__dirname, '..', 'client', 'JS', 'dom.js');
    // fs.readFile(filePath, (err, file) => {
    //   if (err) {
    //     res.writeHead(500);
    //     res.end('server error');
    //   } else {
    //     res.writeHead(200, { 'Content-type': 'text/js' });
    //     res.end(file);
    //   }
    // });
  // } else if (endpoint === '/JS/xhr.js') {
  //   clientHandler(endpoint,res);
    // const filePath = path.join(__dirname, '..', 'client', 'JS', 'xhr.js');
    // fs.readFile(filePath, (err, file) => {
    //   if (err) {
    //     res.writeHead(500);
    //     res.end('server error');
    //   } else {
    //     res.writeHead(200, { 'Content-type': 'text/js' });
    //     res.end(file);
    //   }
    // });
  } else if (endpoint === '/tracks') {
    https.get('https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm',(res) => {
          const data = '';
          res.on('data', (chunk) => {
            data += chunk;
          });
          res.on('end', () => {
            const apiData = JSON.parse(data);
            // console.log(apiData);
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(apiData);
          });
        }).on('error', (err) => {
        console.log('Error ' + err.message);
      });
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
};
module.exports = router;