/*
const max = 100;
const min = 50;

let x = Math.floor(Math.random()* (max-min)+min);
console.log(x);
*/

const value = document.getElementById("vysledek");
let count = 0;
const min = 1;
const max = 6;

document.getElementById("roll").onclick = function(){
    count = Math.floor(Math.random() * max) + min;
    value.textContent = count;    
}