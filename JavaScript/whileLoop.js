/*
let username;

do{
    username = window.prompt("Zadej svůj nick");
}while(username === "" || username === null)
console.log("Vítej " + username);
*/
let loggedIn = false;
let password;
let username;

while(!loggedIn){
    username = window.prompt("Zadej své jméno");
    password = window.prompt("Zadej své heslo");

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("Jsi přihlášen!");
    }
    else{
        console.log("Neplatné údaje! Zkus to znovu.");
    }
};