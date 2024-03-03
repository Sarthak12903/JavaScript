// If 
if (true){
    console.log("HI");
}
if (false){
    console.log("HI");
}

const isuserLoggedin = true;
if(isuserLoggedin){
    console.log("I am logged in");
}

const score = 200;
if(score > 100){
    const power = "Fly0";
    console.log(`User power: ${power}`);    
}

const balance = 1000;
if(balance > 500) console.log("test");     // implicit scope block


// Switch

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 3;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("FEB");
        break;
    case 3:
        console.log("March");
        break;

    default:
        console.log("default case match");
        break;
}



