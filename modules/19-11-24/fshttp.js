const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        fs.readFile('index.html','utf8',(err,data)=>{
            if(err){
                res.end('Internal server Error')
            }else{
                res.writeHead(200,{'Content-Type':'text/html'})
                res.end(data)
            }
        })
    }
    else if(req.url==='/about'){
        fs.readFile('about.html','utf8',(err,data)=>{
            if(err){
                res.end('Internal server Error')
            }else{
                res.writeHead(200,{'Content-Type':'text/html'})
                res.end(data)
            }
        })
    }
})

server.listen(8000,()=>{
    console.log('server listening port')
})