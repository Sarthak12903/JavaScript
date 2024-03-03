const user = {
    username: "sarthak",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(`Got user details from database`);
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}


console.log(user.username);
// console.log(user.getUserDetails());


// Constructor Function


//const promise2 = new Promise();  // Promise() is constructoe 
//const date = new Date() ;    

function userName(username, Login, isLoggedin)
{
    this.username = username;
    this.Login = Login;
    this.isLoggedin = isLoggedin;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this    // this ke empty object mein joh uper vali values dali ehin usmein se sare values return hone
}


// const userOne = userName("sarthak",12,true);
// const userTwo = userName("hoho",12,true); 
// console.log(userOne.username);   // even though userTwo is not called it will override the userOne
// Thats why new keyword is used to set particular vales for new object

const userThree =  new userName("sarthak",12,true);   // Constructor function
const userFour =  new userName("hoho",12,false); 
console.log(userThree.constructor);  // khud hi ke bare mein reference dega
// console.log(userFour);




