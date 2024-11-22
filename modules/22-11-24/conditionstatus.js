const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end('<h1>Home</h1><p>this is the homepage</p>')
    }
    else if(req.url==='/about'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end('<h1>About</h1><p>this is the aboutpage</p>')
    }
    else if(req.url==='/contact'){
        
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end('<h1>contact</h1><p>this is the contacttpage</p>')
    }
    else {
        res.writeHead(404,{'Content-Type':'text/html'})
        res.end(' resource not found')
    }
})

server.listen(3000,'127.0.0.1',()=>{
    console.log('server has started')
})