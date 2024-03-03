const score = 400;
console.log(score);

const balance = new Number(100);  // Explicitly datatype defined
console.log(balance);


const StringNumber = balance.toString();
console.log(typeof(StringNumber));

console.log(balance.toFixed(2));  // gives number with  decimal number passed through argumnet
console.log(balance.toFixed(1));

const otherNumber = 23.8966;    //23.9
console.log(otherNumber.toPrecision(3));

const otherNumber1 = 123.8999;
console.log(otherNumber1.toPrecision(3));  // 124

const otherNumber2 = 1123.8999;
console.log(otherNumber2.toPrecision(3));  // 1.12e+3

const hundreds = 10000000;
console.log(hundreds.toLocaleString()); // 10,000,000 US standards

console.log(hundreds.toLocaleString('en-IN')); //1,00,00,000  Indian standards


//++++++++++++++++ Maths ++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4));

console.log(Math.round(5.53));
console.log(Math.ceil(5.53));
console.log(Math.floor(5.53));
console.log(Math.min(4,3,5,6,8));


console.log(Math.random());    // between 0 and 1

console.log(Math.random()*10);
console.log(Math.floor((Math.random()*10)) +1);


const min = 10;
const max = 20;

console.log((Math.random()*(max-min +1))+min); // General form to specify range for random