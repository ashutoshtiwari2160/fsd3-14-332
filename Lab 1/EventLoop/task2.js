import fs from 'fs/promises' ;

const writeData = async()=>{
  try {
    console.log("about to write...") ;
     await fs.writeFile('stud.txt',"Name:Raman Singh")
  } catch (error){
    
  }
}
const f1=()=>{
  console.log("f1");
}

const f2 = ()=>{
  console.log("f2") ;
} ;

const main = () =>{
console.log("main") ;
setTimeout(f1,0) ;
// f2();
setImmediate(f2);
process.nextTick(f3) ;

writeData();
console.log("end") ;
} ;
main();


// promise







