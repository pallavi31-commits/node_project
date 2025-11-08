const http = require('http')
// building the server logic
const server = http.createServer((req,res)=>{
    if(req.url == '/hello'){
        res.end('Hello World!')
    }
    else{
        res.end("You are trying to hit a wrong URL")
    }
})
server.listen(8000,()=>{
    console.log("server is started")
})