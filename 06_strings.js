const name = "Sarthak";
const repoCount = 50;

console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('SArthak-Bhalerao ')  //string declared 
console.log(typeof gameName)

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);


const anotherstring = gameName.slice(0,4);
console.log(anotherstring);


const newStringOne = "     Sarthak    " ;
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://lc.com";

console.log(url.replace('lc','-'));

console.log(url.includes("lc"));


console.log(gameName.split('-'));
console.log(gameName.startsWith('S'));




