var http = require("http");
http
   .createServer((req,res) =>{
    res.write("Hello Word");
   })
   .listen(80);
   //80: default http port