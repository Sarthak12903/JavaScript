// Promise is an object

const promiseOne =  new Promise(function(resolve,reject){
    // Do an asyn task
    // DB call, cryptography, netwrok call
    setTimeout(()=>{
        console.log("Async task is complete");
        resolve();     // resolve method is directly connected to our then method
    },1000)
});

promiseOne.then(()=>{
    console.log("Promise consumed");
})

//OR

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Asyn task 2");
        resolve();
    },1000)
}).then(()=>{
    console.log(("Asyn2 resolved"));
})


const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({user:"chai",email:"sarth.com"})

    },1000)
})

promiseThree.then((e)=>{
    console.log(e);
})



const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:"Sathak", password:"abc"});

        }
        else{
            reject("ERROR: Something went wrong");
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((e)=>{          // uper vale .then ki value yaha ayegi known as chaining
    console.log(e);

})
.catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resovled or rejected");
});




const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:"javascript", password:"abc"});

        }
        else{
            reject("ERROR: JS went wrong");
        }
    },2000)
});


async function consumPromiseFive(){
    try {
        const response =  await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumPromiseFive()

// async function getAllusers(){
//     try {
//         const response = await fetch('https://api.github.com/users/sarthak12903')
//         const data = await response.json();
//         console.log(data);
        
//     } catch (error) {
//         console.log("E: " , error);
//     }
// }


// getAllusers()


fetch('https://api.github.com/users/sarthak12903')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})













