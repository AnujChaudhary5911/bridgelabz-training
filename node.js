const {reverse,upper} =require("./export.js");
const os=require('os');
const fs=require('fs');
setTimeout(()=>{
console.log(os.platform())
console.log(os.hostname())
console.log(os.cpus())

},10000)
console.log(upper("hello guys"));
console.log(reverse("hello guys"));
 fs.readFile("a.txt","utf-8",(err,data)=>{
    const anuj=data.length;

   fs.writeFile("b.txt", anuj.toString(), (err) => {
       
    });
 })
