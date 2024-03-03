let myName = "Sarthak     ";
let myChannel = "js     ";
console.log(myName.length);
// console.log(myName.trim().length);


let myHeros = ['thor','spiderman']

let heroPower = {
    thor: "Hammer",
    spiderman:"sling",


    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


Object.prototype.sarthak = function(){
    console.log(`Sarthak is present in all object`);
}
heroPower.sarthak();
myHeros.sarthak();



Array.prototype.heySarthak = function(){
    console.log("sarthak is god");
}

myHeros.heySarthak();
//heroPower.heySarthak();   // isse vo access nahi hoga since function inject hamne child array ko di ehin and not parent object

// inheritance

const teacher = {
    makeVideo: true,

}

const teachingAssistant = {
    isAvailable: false
}
const TASupport = {
    makeAssignment:"js assignment",
    fullTime: true,
    __proto__: teachingAssistant   // now all the property of teachingassiatant can be accessed by TASupport
}

//OR
TASupport.__proto__= teacher;// now all the property of teacher can be accessed by TASupport   // inheritance

// modern syntax

Object.setPrototypeOf(teachingAssistant,teacher) // teachingassistant abb sari property access karega teacher ki property



let anotherUserName = "Chai aur Code      ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUserName.trueLength()
"sarthak".trueLength();




