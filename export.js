function upper(a){
   return  a.toUpperCase();
 
}
function reverse(a){
    return a.split(" ").reverse().join(" ")
    
}


module.exports={
    upper,
    reverse
}