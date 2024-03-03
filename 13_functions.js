function saymyname(){
    console.log("sarthak");   
}
saymyname();    // saymyname --- reference   and saymyname() ---- execution

// function addTwoNumber(number1, number2){   // parameters
//     console.log(number1 + number2);
// }
function addTwoNumber(number1, number2){   // parameters
    let result = number1 + number2;
    return result;
}

addTwoNumber(2,4)    // 2 ad 4 are arguments
addTwoNumber(2,"4");

const result = addTwoNumber(3,5);
console.log("Result: " + result);       // if function doesnt have return then it will print undefined since functon is not returning anything



function loginUserMessage(userName = "sarth"){     // by default
    return `${userName} just logged in`;
}

console.log(loginUserMessage("Sarthak"));

console.log(loginUserMessage());

// ... is also known as spread operator as well as rest operator depends on its use case

function calculatecartPrice(...num1){   // now multiple arguments can be passed with one parameter and here it is rest operator
    return num1;
}

console.log(calculatecartPrice(2,200,122));


const user = {
    username: "Sarthak",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);


handleObject({
    username:"as",
    price:45
});



const myNewArray = [200,400,100,600];

function returnSecondValue(getArray){
    
    return getArray[0];

}

console.log(returnSecondValue(myNewArray))