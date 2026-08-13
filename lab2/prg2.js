import {mkdir} from "fs/promises" ;
// await mkdir("uploads") ; 
// await mkdir("uploads;/images"); 
//await mkdir("docs/resumes/data",{recursive:true}) ;
// removes only data folder 
//await rm("docs/resumes/data",{recursive:true}) ;
// removes main folder and subfolder also 
await rm("docs",{recursive: true}) ;
