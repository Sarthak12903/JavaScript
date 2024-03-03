// Array

const myArr = [0,1,2,3,4,5];
console.log(myArr[0]);

// shallow copy which makes copy of the reference
// deep copy which makes the copy of the object wothout considering its refernce

const myHeros = ["Ironman","ca"];



const myArr2 = new Array(1,2,3,4);  // another way to declare array
console.log(typeof myArr2);

// Array methods

myArr.push(6)
console.log(myArr);


myArr.pop();
console.log(myArr);


myArr.unshift(9);
console.log(myArr);

myArr.shift();
console.log(myArr);


console.log(myArr.includes(9));  // false
console.log(myArr.includes(1));  // true

console.log(myArr.indexOf(2));
console.log(myArr.indexOf(10));   // -1 for false or not found


const newArr = myArr.join();  // converted to string format

console.log(myArr);
console.log(newArr);

console.log(typeof newArr);


// slice and splice

console.log("A",myArr);
const myn1 = myArr.slice(1,3);   // upper limit not included

console.log(myn1);
console.log("B",myArr);



const myn2 = myArr.splice(1,3);  // it states 3 element has to removed from index 1
console.log("C",myArr);
console.log(myn2);


