const http=require('http');
const fs= require('fs');
const path= require('path');
const server=http.createServer((req,res)=>{
    let filepath="";
    let contentType='text/html'
    if(req.url==="/"){
        filepath=path.join(__dirname,"index.html");
    }else if(req.url==="/contact-me"){
        filepath=path.join(__dirname,"contact-me.html");
    }else if(req.url==="/about"){
        filepath=path.join(__dirname,"about.html")
    }else{
        filepath=path.join(__dirname,"404.html");
        res.statusCode=404;
    }
    fs.readFile(filepath,(err,data)=>{
    if(err){
        res.writeHead(500,{"contentType":contentType});
    res.end("server error");
    }else{
        res.writeHead(res.statusCode||200,{"contentType":contentType});
        res.end(data);
    }
})
})
server.listen(3000,()=>{
    console.log("server running");
})

