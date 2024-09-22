var incrementButton= document.getElementById("increase");
var decrementButton= document.getElementById("decrease");
var resetButton= document.getElementById("reset");
var number= document.getElementById("numberCounter")
let count=0;

incrementButton.onclick= function(){
    count++;
    number.textContent =count;
}

resetButton.onclick= function(){
    count=0;
    number.textContent =count;
}

decrementButton.onclick= function(){
    if(count>0){
        count--;
    number.textContent =count;
    } 
}