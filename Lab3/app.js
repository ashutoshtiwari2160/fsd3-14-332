import http from 'http';
const server = http.createServer() ;
server.on('request',(req,res)=>{
  res.write("<h1>Welcome to server side programming</h1>");
  res.write("<h2>NOde is tracking the file</h2>") ;

  res.end();
})

server.listen(5000,()=>{
  console.log("Server is runninng");
}) ; 
// http;//localhost:5000