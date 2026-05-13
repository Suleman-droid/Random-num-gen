const num = document.getElementById("num");
const button = document.getElementById("gen");
let x;
let max = 1000;
button.onclick = function(){
    x = Math.ceil(Math.random() * max);
    num.textContent = x;
}