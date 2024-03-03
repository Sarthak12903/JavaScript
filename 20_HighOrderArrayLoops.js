// // for of

// const arr =[1,2,3,4,5,6,8,'f'];

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello World";
// for (const greet of greetings) {
//     console.log(greet);
// }


// // Maps

// const map = new Map();
// map.set(1,'a');
// map.set(2,'b')
// map.set(2,'c')
// map.set(3,'c')
// console.log(map);


// for (const [key,value] of map) {
//     console.log(key,value);
// }



// const obj = {
//     game: 'NFS',
//     game2:'GTA'
// }
// // for (const [key,value] of obj) {
// //     console.log(key,value);
// // }



// const myobj = {
//     ja: "javascript",
//     cpp: "C++",
//     rb: "ruby",
//     swift:"swift by apple"
// }

// for (const key in myobj) {
//     console.log(`${key} shortcut is for ${myobj[key]}`);

// }

// const myarray = ['js','rb','py'];
// for (const key in myarray) {
//     console.log(myarray[key]);    
// }



const coding = ['js','ruby','java','python','cpp'];


coding.forEach((value,index)=>{
    console.log(value,index);
})


function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

coding.forEach((item,index, arr)=>{
    console.log(item,index,arr);
     
})


const myCoding = [
    {
        langName:"javascript",
        langFile:"js"
    },
    {
        langName:"java",
        langFile:"java"
    },
    {
        langName:"Python",
        langFile:"py"
    },
    
];



myCoding.forEach((Item)=>{
    console.log(Item.langName);
});








