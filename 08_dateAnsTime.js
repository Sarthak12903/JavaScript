// Dates
let myDate = new Date();
console.log(myDate.toString()); //Sun Feb 11 2024 21:33:50 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());  //Sun Feb 11 2024
console.log(myDate.toISOString());  //2024-02-11T16:04:33.672Z
console.log(myDate.toJSON());  //2024-02-11T16:04:33.672Z
console.log(myDate.toLocaleDateString());  //2/11/2024
console.log(myDate.toLocaleString());  // 2/11/2024, 9:35:36 PM


let myCreatedDate = new Date(2023,0,23);
let myCreatedDate1 = new Date(2023,1,23);
let myCreatedDate2 = new Date(2023,1,23,5,3);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate1.toDateString());
console.log(myCreatedDate2.toLocaleString());

let date = new Date("2023-05-23");
console.log(date.toLocaleString());

console.log(date.getTime());  // values in milisecond


let myTimeStamp = Date.now()     
console.log(myTimeStamp);  // values in milisecond


console.log(Math.floor(Date.now()/1000));   // in seconds

let newDate = new Date();
console.log(newDate.getMonth() +1 ); // one added as january would be shown as 0 month starts from 0
console.log(newDate.getDay());



console.log(newDate.toLocaleString('default',{
    weekday: "narrow",
    hour: "2-digit",
}));


