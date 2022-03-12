const fs = require('fs');
const path =require('path');

const router = (req,res)=>{
    const endpoint = req.url;
    if(endpoint ==='/'){
        const filePath = path.join(__dirname,'..','client','HTML','index.html');
        fs.readFile(filePath,(err, file)=>{
            if(err){
                res.writeHead(500);
                res.end('server error');
            } else {
                res.writeHead(200,{'Content-type': 'text/html'})
                res.end(file);
            }
        })
    } else if (endpoint === '/CSS/style.css'){
        const filePath = path.join(__dirname,'..','client','CSS','style.css');
        fs.readFile(filePath,(err, file)=>{
            if(err){
                res.writeHead(500);
                res.end('server error');
            } else {
                res.writeHead(200,{'Content-type': 'text/css'})
                res.end(file);
            }
        })
    } else if (endpoint === '/JS/dom.js'){
        const filePath = path.join(__dirname,'..','client','JS','dom.js');
        fs.readFile(filePath,(err, file)=>{
            if(err){
                res.writeHead(500);
                res.end('server error');
            } else {
                res.writeHead(200,{'Content-type': 'text/js'})
                res.end(file);
            }
        })
    } else if (endpoint === '/JS/xhr.js'){
        const filePath = path.join(__dirname,'..','client','JS','xhr.js');
        fs.readFile(filePath,(err, file)=>{
            if(err){
                res.writeHead(500);
                res.end('server error');
            } else {
                res.writeHead(200,{'Content-type': 'text/js'})
                res.end(file);
            }
        })
    } else{
        res.writeHead(404);
        res.end('Page not found');
    }
}
module.exports = router;