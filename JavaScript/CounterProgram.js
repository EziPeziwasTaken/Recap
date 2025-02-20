const counter =  document.getElementById("counterLabel").value;
let count = 0;
document.getElementById("decBtn").onclick = function(){
    count -= 1;
    counterLabel.textContent = count;

}
document.getElementById("incBtn").onclick = function(){
    count += 1;
    counterLabel.textContent = count;
}
document.getElementById("resBtn").onclick = function(){
    count = 0;
    counterLabel.textContent = count;
}