const marvelHeros = ['thor',"IronMan","Spiderman"];
const dc = ["superman","flash","batman"];


// marvelHeros.push(dc);
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);


const allHeros = marvelHeros.concat(dc);  // forms new array and stores in allHeros 
console.log(allHeros);


const allNewHeros = [...marvelHeros,...dc];  // can be use in replace to concat() function and forms new array
console.log(allNewHeros);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realAnotherArray = another_array.flat(Infinity);
console.log(realAnotherArray);



console.log(Array.isArray("Sarthak"));
console.log(Array.from("Sarthak"));

console.log(Array.from({name:"sarthak"}));   // interesting case


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));  // makes new array

