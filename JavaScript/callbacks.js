// funkce která je předána jako argument jiné funkci
// používá se k asynchronním operacím:
//      1. Read soubor
//      2. Network requests
//      3. Interacting with databases

//      "Hey, when you done, call this next"


hello(wait);

function hello(callback){
    console.log("Hello World!");
    callback();
}

function wait(){
    console.log("Wait!")
}

function leave(){
    console.log("Leave!")
}

function goodbye(){
    console.log("Goodbye World!");
}

sum(displayPage, 1, 2);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}

function displayConsole(result){
    console.log(result);
}