const user = {
    username: "Sarthak",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

console.log(this);  // it will show empty in node environment not in browser
// Window is global object in browser



// function chai(){
//     let username = "sarthak";
//     console.log(this.username);   // dont work in function only in object
// }
// chai();



// const chai = function(){
//     let username = "Sarthak";
//     console.log(this.username);
// }
// chai();

const chai = ()=>{
    let username = "sarthak";
    console.log(this);
}

chai();


// const addTwo = (num1,num2)=>{
//     return num1 + num2;
// }

// console.log(addTwo(2,4));

// OR 
// implicit return
const addTwo = (num1,num2)=> num1 + num2;
console.log(addTwo(2,4));


const addThree = (num1,num2)=> ({username:"sarthak"} );
console.log(addThree(3,4));


// const myArray = [2,5,3,7,8];

// myArray.forEach()

