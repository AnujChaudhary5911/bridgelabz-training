const {reverse,upper} =require("./export.js");
const os=require('os');
const fs=require('fs');

 fs.readFile("a.txt","utf-8",(err,data)=>{
    const anuj=data.length;

    fs.appendFileSync("b.txt",anuj.toString());
    console.log("your work is done");
 })
