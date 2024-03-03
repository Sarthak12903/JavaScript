const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',()=>{
        if (buttons[i].id === "grey") {
            body.style.backgroundColor =`grey`;            
        }
        else if (buttons[i].id === "white") {
            body.style.backgroundColor =`white`;            
            
        } 
        else if(buttons[i].id === "blue"){
            body.style.backgroundColor =`blue`;            
            
        }
        else if(buttons[i].id === "yellow"){
            body.style.backgroundColor =`yellow`;            
            
        }
        else if(buttons[i].id === "purple"){
            body.style.backgroundColor =`purple`;            
            
        }
        else if(buttons[i].id === "green"){
            body.style.backgroundColor =`green`;            
            
        }
        else if(buttons[i].id === "orange"){
            body.style.backgroundColor =`orange`;            
            
        }
    })
    }
    




