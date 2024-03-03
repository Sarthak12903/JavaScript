class User{
    constructor (username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;

    }

    addcourse(){
        console.log(`A new course was added by ${this.username}`);
    }


}


const chai = new Teacher("chai","cahi.com","123")
chai.logMe();
chai.addcourse();

console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);