const userEmail = "sar.com";   // considered true

if (userEmail){
    console.log("Got user email");

}else{
    console.log("dont have user email");


}
const userEmail1 = "";    // considered false

if (userEmail1){
    console.log("Got user email");

}else{
    console.log("dont have user email");
}



const userEmail2 = [];    // considered true

if (userEmail2){
    console.log("Got user email");

}else{
    console.log("dont have user email");
}


/* falsy values:
    false, 0 , -0 , BigINt 0n, "", null, undefined, NaN

*/

/* truty values:
    true, "0" , 'false' , " ", [], {}, function(){}

*/

if (userEmail2.length === 0 ){   // to check array to be empty eith conditional statement
    console.log("empty");
}

const emptyObj = {};

if(Object.keys(emptyObj).length ===0){     // to check for object to be empty with condition statement
    console.log("empty");
}

// Nullish Coalescing operator (??) : made for null undefined


let val1;
// val1 = 5 ?? 10;
val1 = null ?? 10;
console.log(val1);


val1 = undefined ?? 20;
console.log(val1);

val1 = null ?? 10 ?? 15;
console.log(val1);


// Terniary operator

// condition ? true : false;
const ic = 100;
ic >=80 ? console.log("oh yeah") : console.log("less than 80");;