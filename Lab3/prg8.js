import http from 'http'
const server = http.createServer((req,res)=>{
  if(req.url==='/' && req.method === 'GET')
    res.end('home page')
  else  if (req.url ==='/product' && req.method === 'GET'){ 
       res.end('show prduct')
    const products = {
      id : 1 ,
      name : "mobile",
      price:2000,
    },
    {
      id: 2 ,
      name: "duster",
      price: 10 ,
    } ; 
    res.end(JSON.stringify(products)) ;
  } 
  else if(req.url === '/product' && req.method === 'POST')
        //retrive data from client 
        let body ;
        req.on("data",chunk)=>{
          body +=chunk
        })
        req.on("end",()=>()=>{
          const product = 
        }
        //add data to database

        //send back to database

       res.end('add product')
  else if(req.url === '/product' && req.method === 'PUT')
       res.end('update product')
  else if(req.url === '/product' && req.method === 'DELETE')
       res.end('remove product')
  else {
    res.statusCode = 404 ;
    res.end("not found")
  }
}) 
server.listen(3000,()=>console.log('prg11 is running')) 
