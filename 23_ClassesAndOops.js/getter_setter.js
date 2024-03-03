//getter(get) define kiya hein toh setter (set) bhi define karna hi hoga
// jab getter emin koi varible lete hein toh vo as a fucntion hi lete hein


class User{
    constructor(email,password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
         this._email = value
    }
    get password(){
        return `${this._password} sarthak`
    }

    set password(value){
        this._password = value
    }
}


const sarthak = new User("sart.com","abc")
console.log(sarthak.password);
console.log(sarthak.email);

