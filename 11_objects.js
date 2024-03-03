// singleton ..it is created on through constructed and through literals


// object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "Sarthak",
    "full name" : "Sarthak bhalerao",   // now this cant be accessed by DOT notation
    [mySym]: "myKey1",    // use square bracket for Symbol declaration in object
    age: 21,
    location: "Pune",
    email: "sarhtak.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monaday","Saturday"]
};

console.log(jsUser.email);
console.log(jsUser["email"]);

console.log(jsUser["full name"]);

console.log(jsUser[mySym]);
console.log(jsUser);

jsUser.email = "sart.com";
console.log(jsUser);
// Object.freeze(jsUser);    // note jsUser object will become unmutible with freeze()

jsUser.email = "sart.com.comuuiii";
console.log(jsUser);



jsUser.greeting = function(){
    console.log("Hello js user");

}
jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);

}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());






