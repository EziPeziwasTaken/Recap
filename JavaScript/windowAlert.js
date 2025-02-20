window.alert("Whatup");
document.getElementById("mojeH1").textContent = "Nadpis úrovní h1";
document.getElementById("mojeP").textContent = "Tohle je paragraf";

let age = 22;
console.log("Je ti " +age+ " let");
console.log(typeof age);
/*
let username = window.prompt("Jak se jmenuješ?");;
console.log(username);
*/
let username;
document.getElementById("myButton").onclick = function(){
    //username = document.getElementById("myName").value;
    window.alert(username);
}