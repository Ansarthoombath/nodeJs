const http=require('http')

const server=http.createServer((request,response)=>{
    // response.end('hello')
    response.write('<h1>welcome to server</h1>')
    console.log('got new request')
})

server.listen(5000,'127.0.0.1',()=>{
    console.log('server has started')
})

