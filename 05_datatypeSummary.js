// Primitive

// 7 type : String , Number, Boolean, null, undefined, Symbol, BigInt

// Reference Type (Non - primitive)

// Array , Objects, Functions

const id = Symbol('12');
const anotherid = Symbol('123');

console.log(id === anotherid); // false

//const bigNumber = 34564561231654645213524631563465;
const bigNumber = 34564561231654645213524631563465n;  // now it is bigint

const heros = ["iron man","doga","CA"];

let myObj = {
    name : "Sarthak",
    age: 22,
};


const myfunction = function(){
    console.log("hello");
    
};
myfunction(); 
console.log(typeof(myfunction));



//+++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) and Heap (non- primitive) memory


let myName = "Sarthak";
let anothername = myName;
anothername = "Bhalerao"
console.log(anothername);
console.log(myName);


let userOne = {
    email : "sarthak.com",
    upi: "user.ui",
};

let userTwo = userOne;


userTwo.email = "ytytytyty";
console.table([userOne,userTwo]); 



