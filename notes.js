let word ="node";
console.log(word[0]);//n
console.log(word[1]);//o

//toUpperCase()
let name="anuj";
console.log(name.toUpperCase());

//to LowerCase()
let city="delhi";
console.log("lowercase"+city.toLowerCase());

//trim()
let msg="   hello world   ";
console.log("trimed:",msg.trim());

//includes()
let sentence="I Love You";
console.log(sentence.includes("Love"));


//startsWith()
let email ="admin@gmail.com";
console.log("starts with admin : ",email.startsWith("admin"));

//endsWith()
let mail="admin@gmail.com";
console.log("endsWith : ",mail.endsWith(".com"));


//slice()
let lang="javaScript";
console.log("slice(0,4): ",lang.slice(0,4));

//substring()
console.log("substring(4,10) :",lang.substring(4,10));

//replace
let greet ="hello world";
console.log("replace : ",greet.replace("world","node"));

//replaceAll()
let hitext="hi hi hi";
console.log("replaceAll() :", hitext.replaceAll("hi","hello"));

//split()
let names="anuj,chaudhary,ji";
console.log("split name",names.split(","));

//concat()
let a="hello";
let b="world";
console.log("concat : "+a.concat(" ",b));

//template literal
let username="anuj";
let age=21;
console.log(`my name is ${username} and age is ${age}`);

let work="I& Am & AbC";
 let anuj=work.replaceAll("&"," ");
let result="";
for (let char of anuj) {
  if (char === char.toUpperCase()) {
    result += char.toLowerCase();
  } else {
    result += char.toUpperCase();
  }
}

console.log(result); 