const coding = ["js","ruby","java","python","cpp"];

// forEach() doesnt return any value

const values = coding.forEach( (item) => {
    console.log(item);
    return item     // wont work only 
});

console.log(values); // it will give undefined

// To return there are other various functions
// filter() returns the value unlike forEach()
const myNums = [1,2,3,4,5,6];
// const newNums = myNums.filter( (num) => {
//     return num>4;

// })

const newNums = []
myNums.forEach( (num) =>{
    if(num>4){
        newNums.push(num)
    }
})

// const ar = myNums.filter((num)=>{
//     return num*10;
// })
// console.log(ar);


 // map()
 const myNumbers = [1,2,3,4,5,6,7,8,9]

 const newNum = myNumbers.map( (num) =>{
    return num*10
 })

 console.log(newNum);

 const newN = myNumbers.map( (num) => num*10).map( (num) => num+1).filter( (num) =>num>=40) // chaining

console.log(newN);



// reduce()

 const mynum = [1,2,3]

const myTotal= mynum.reduce( (acc,currval) =>{
    console.log(`accumulator : ${acc} and currval : ${currval}`);
    return acc+currval;
}, 0 )     // acc ki value yaha 0 ker di so to tell it that it has to start from zero

console.log(myTotal);


const total = mynum.reduce( (acc,currval) => acc+currval,0)

console.log(total);











