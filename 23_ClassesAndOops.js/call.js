function setUserName(username){
    // complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username, email, password){
    setUserName.call(this,username) 
        // iska reference hold kerke rakhna hein since function call khatam hote hi uske under ke variable gayab ho jate hein and we want those variable to show effect after its execution in createUser function

    
    this.email =email;
    this.password = password; 
}


const chai = new createUser("chai",'sa.com','123')
console.log(chai);




