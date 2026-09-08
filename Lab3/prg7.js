import http from 'http' ;
const server = http.createServer((req,res)=>{
 if (req.url === "/" && req.method === "GET"){
  res.end("<h1>Products detail </h1>") ;  
 }
});
server.listen(3000,()=>console.log("prg7 is runnng at port 3000")) ;
