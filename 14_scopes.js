
var c = 300;
let a = 50;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;     // outer value got overwirtten thats why var is discarded
    
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Sarthak";
    function  two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two();
}

one()



//+++++++++++++++++++ interesting +++++++++++++++++++++++++++++++

addOne(5);
function addOne(num){
    return num + 1;
}




const addTwo = function(num){
    return num + 2;
}

addTwo(5);



