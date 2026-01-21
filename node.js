
const os=require('os');
setTimeout(()=>{
console.log(os.platform())
console.log(os.hostname())
console.log(os.cpus())

},10000)
