import http from "http"
import { getAllTeams, addTeam , getTeamById } from "./teams.js" ;
import { parse as parseUrl} // import teams.js
import * as teams from "teams.js";   
const PORT=5000;
const server = http.createServer((req,res)=>{
    if(req.url==="/" && req.method=="GET"){
        const teams= teams.getTeamsAllTeams();
        res.writeHead(JSON.stringify(teams));
        // res.end();
    }
    else {
        res.statusCode=404;   
        // res.end();    
    }
});
const parseJSONBody = (req) =>{
    return new Promise ((resolve, reject)=>{
        let body = "";
        req.on("data", (chunk)=>{
            body+= chunk.toString();
        }) ;
        req.on("end",()=>{
            try{
                resolve(body? JSON.parse(body):{}) ;
            }catch (error){
                reject(error) ;
            }
        }) ;
        req.on("error",reject) ;
    }) ;
}
// const server = http.createServer((req,res)=>{
//     res.end("<h1>SIH Internal </h1>");
// });
server.listen(5000,()=>console.log("server is running")); 
 