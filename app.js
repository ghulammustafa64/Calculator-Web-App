
var display = document.getElementById("display");

function calcot(value){
    display.value += value
}
function clall(){
    display.value = ""
}
function delone(){
    display.value = display.value.slice(0,-1);
}
function lastequal(){
    display.value = eval(display.value);
}