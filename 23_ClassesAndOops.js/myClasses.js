// ES6 ke badh ki kahani hein and classes vagarah syntatic sugar hi hein

class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password} abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("Chai", "chai.com","123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene

function User1(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;

}
User1.prototype.encryptPassword = function(){
    return `${this.password} abc`
}

const tea = new User1("tea", "tea.com","123")
console.log(tea.encryptPassword());









