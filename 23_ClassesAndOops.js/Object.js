function multiply5(num){
    return num*5;
}

multiply5.power = 2;

console.log(multiply5(5));
console.log(multiply5.power);
console.log(multiply5.prototype);


/* Array and function---------------->Object------>null
                                        ^
                                        |
                     String ------------|


        Funciton works like functio but can be made to behav like an object like above example where we used dot notation
*/

function createUser(username,score){
    this.username = username;
    this.score = score;

}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}
const chai = new createUser("chai",25);
const tea = new createUser("tea",250);

console.log(createUser.prototype);
console.log(chai.increment());
console.log(tea.increment());
console.log(chai.printMe());
console.log(tea.printMe());

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new javascript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and method defined on the constructors's prototype.

The constructor is called: The constructor function is called with specified arguments and this is bound to the newly created object.Tf no explicit retutn value is specified from the constructor. Javascript assumes this, the newly created object, to be the intended return value.


the new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value( object, array, function, etc.), the newly created object is returned.

*/







