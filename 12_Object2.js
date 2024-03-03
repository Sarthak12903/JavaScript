const tinder = new Object();   // Singleton object
const tinderUser = {};    // non- singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sarthak";
tinderUser.isLoggedIn = false;

console.log(tinder);
// console.log(tinderUser);


const regularUser = {
    email: "some.com",
    fullname:{
        userfullname:{
            firstname: "Sarthak",
            lastname: "bhalerao"
        }
    }
};


// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1:"a",
    2:'b'
};
const obj2 = {
    3:"c",
    4:'d'
};

// const obj3 = {obj1,obj2};

const obj3 = Object.assign(obj1,obj2);  // it all get added to obj 1
const obj4 = Object.assign({},obj1,obj2);  // it all get added to empty object  
console.log(obj3);
console.log(obj4);



const obj5 = {...obj1,...obj2};   // most used syntax
console.log(obj5);


const user = [
    {
        id:"sarthak.com",
        name:"Sarthak"
    },
    {
        id:"saasdthak.com",
        name:"abc"
    }
];

console.log(user[1].id);

console.log(Object.keys(obj1));
console.log(Object.values(obj1));

console.log(Object.entries(obj1)); // key value ko array mein banaya jata ehin

console.log(obj1.hasOwnProperty('5'));




// Destructoring

const course = {
    coursename: "js in hindi",
    prince:"999",
    courseInstructor: "Hitesh"
};

// console.log(course.courseInstructor);

const {courseInstructor } = course;

console.log(courseInstructor);

const {courseInstructor:Instructor } = course;
console.log(Instructor);


// JSON API

// {
//     "name":"Sarthak",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

