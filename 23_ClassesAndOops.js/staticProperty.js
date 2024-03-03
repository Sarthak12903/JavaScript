class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`username: ${this.username}`);
    }
     static createId(){  // static is used when we dont want to give access to this method to all the instances intantiated from this class ...sabko nahi dena bas
        return `123`;
    }
}


const sarthak = new User ("sarthak")
//console.log(sarthak.createId())

class Teacher extends User{
    constructor(email,username){
        super(username)
        this.email = email;
    }
}



const iphone = new Teacher ("iphone.com","iphone")
console.log(iphone.createId());