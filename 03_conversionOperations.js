let score = "333abc";

console.log(typeof(score));


let valueInNumber = Number(score);    // Converted in number
console.log(typeof(valueInNumber));  
console.log(valueInNumber);    // NaN - not a number since it 33abc is converted in number

let score1 = true;
console.log(typeof(score1));


// "33" => 33
// "33abc" => NaN
// "true" => 1 ; false =>0;


let isLoggedIn = 0;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

// 1 => true; 0=> false
// " " => false
// "Sarth" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof(stringNumber));





