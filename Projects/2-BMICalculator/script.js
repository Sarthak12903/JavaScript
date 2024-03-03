const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const height = Number(document.querySelector("#height").value)
    const weight = Number(document.querySelector("#weight").value)
    const result = document.querySelector("#results")

    if(height == " " || height<0 || isNaN(height)){
        result.innerHTML = "Please enter valid height"
    }
    else if(weight == " " || weight<0 || isNaN(weight)){
        result.innerHTML = "Please enter valid weight "
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        //show the result
        if(bmi<18.6){
            result.innerHTML = `<div>${bmi}</div><div>Under Weight</div>`
        }
        else if( bmi>=18.6 && bmi<=24.9){
            result.innerHTML = `<div>${bmi}</div><div>Normal Weight</div>`
        }
        else{
            result.innerHTML = `<div>${bmi}</div><div>Over Weight</div>`
        }
        
    }

    
})