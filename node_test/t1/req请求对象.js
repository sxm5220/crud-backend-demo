const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
    const url = req.url
    const method = req.method
    const str = `读取到的 url is ${url} request method is ${method}`
    res.setHeader('Content-Type','text/html; charset=utf-8')
    res.end(str)
    //console.log(str)
})
server.listen(80,()=>{
console.log('server running at http://127.0.0.1')
})