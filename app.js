
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
    let exponent = display.value;
let operator = "-+*/%";
let error = false;

 
for(let i = 0; i < exponent.length -1; i++){
    var current = exponent[i];
    var  next = exponent[i + 1];

if(operator.indexOf(current) !== -1 && operator.indexOf(next) !== -1){

        error = true;
        break;
    }

}

if (error){
    display.value = "Error";
}else {
    display.value = eval(exponent);
}
}
