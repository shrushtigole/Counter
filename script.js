var incrementbtn= document.getElementById("increase");
var decrementbtn= document.getElementById("decrease");
var resetbtn= document.getElementById("reset");
var number= document.getElementById("numberCounter")
let count=0;

incrementbtn.onclick= function(){
    count++;
    number.textContent =count;
}

resetbtn.onclick= function(){
    count=0;
    number.textContent =count;
}

decrementbtn.onclick= function(){
    count--;
    number.textContent =count;
},console.log(incrementbtn)