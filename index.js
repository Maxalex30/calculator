// https://www.youtube.com/watch?v=I5kj-YsmWjM   Build this JS calculator in 15 minutes! 🖩      By: Bro code

const display = document.getElementById("display");

function appendToDisplay(input){
display.value += input;
}
function clearDisplay(){
display.value   = "";
}

function calculate(){
    
    try{
display.value = eval(display.value);
}

catch(error){
    if(display.value.includes('/0')){
        display.value = "Undefined";
    } 
    else{
    display.value ="Error";
    }
}

}

// work on the undifined for the / by 0 exception handleing