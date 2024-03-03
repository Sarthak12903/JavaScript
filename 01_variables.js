const accountId = 144553;
let accountEmail = "sarthak12903@gmail.com";
var accountPassword = "12345";
accountCity = "Pune";
let accountState;

// accountId = 2;   //not allowed
accountEmail = "hc23.com";
accountPassword = "56565656";
accountCity = "banglore";
console.log(accountId);
console.log(accountEmail);
// another method for console


/*
    Prefer not to use var because of the issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

