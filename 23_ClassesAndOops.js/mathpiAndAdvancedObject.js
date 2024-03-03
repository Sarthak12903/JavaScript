
console.log(Math.PI)
Math.PI = 5;
console.log(Math.PI)

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")  // this function shoes some hidden property
console.log(descriptor);


const chai ={
    name: "ginger",
    price:250,
    isAvaliable:true,

    orderChai:function(){
        console.log("chai nha bani");
    }
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai,"name",{
    writable: false,    // editing for name
    enumerable:false,   // iteration for name
    configurable: true
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key,value] of Object.entries(chai)) {  // code fat  gaya ka example
    console.log(`${key} :${value}`);
}



// toh uska resolution

for (const [key,value] of Object.entries(chai)) {
    if (typeof value !=="function") {
        
        console.log(`${key} :${value}`);
    }
}















