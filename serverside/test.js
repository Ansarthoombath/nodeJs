const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('<h1>Home</h1>')
        res.end('this is the homepage')
    }
    else if(req.url==='/about'){
        res.write('<h1>about Us</h1>')
        res.end('this is the aboutPage')
    }
    else if(req.url==='/contact'){
        
        res.end('this is the ContactPage')
    }
    else {
    
        res.end('404, resource not found')
    }
})

server.listen(3000,'127.0.0.1',()=>{
    console.log('server has started')
})