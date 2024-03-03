// for loop

let array = [1,2,5,4,8,7];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}


for (let i = 0; i <=10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <=10; j++) {
        console.log(`Inner loop value ${j}`);
        
    }
    
}

