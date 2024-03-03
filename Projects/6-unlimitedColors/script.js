
//generate a random color
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = `#`
    const indexRand = Math.floor(Math.random()*16);
    for(let i = 0;i<6;i++){
        color += hex[indexRand];
    }

    return color;
}
let intervalId;
const startChangingColor = function(){
     if(!intervalId){
        intervalId = setInterval(()=>{
            document.body.style.backgroundColor = randomColor();
        },1000)
     }
    
}
const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
}
document.querySelector("#start").addEventListener('click',startChangingColor)
document.querySelector("#stop").addEventListener('click',stopChangingColor)