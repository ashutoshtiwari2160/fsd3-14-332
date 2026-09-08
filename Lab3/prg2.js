import http from 'http' ;
const server = http.createServer((req,res)=>{
  console.log("Welcome") ;
  res.end("Hello User")  ;
}) ;  
const PORT = 4444 ;
server.listen(PORT,()=>console.log("Server is running")) ;
