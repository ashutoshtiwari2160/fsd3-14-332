import htttp from 'http'
const server = http.createServer((req,res)=>{
  console.log("welcome ")
  req.end("Hello from server ") ;
}) ;
const PORT = 4444 ;
server.listen(PORT,()=> console.log("Server is running...")) ;
else {
  res.statusCode = 404 ;
  <h1>404, Not found</h1>
}

