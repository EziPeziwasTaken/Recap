const minNum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let pokus;
let moznosti = 0;
let running = true; 

while(running){
    pokus = window.prompt("Uhádni číslo mezi " + minNum + " - " + maxNum);
    pokus = Number(pokus);
    console.log(typeof pokus, pokus);
    running = true;

    if(isNaN(pokus)){
        window.alert("Musíš zadat číslo!");
    }
    else if(pokus < minNum || pokus > maxNum){
        window.alert("Zadej vhodné číslo!");
    }
    else{
        moznosti++;
        if(pokus < answer){
            window.alert("Příliš málo! Zkus to znovu");
        }
        else if(pokus > answer){
            window.alert("To je přiliš! Zkus to znovu");
        }
        else{
            window.alert("Uhodl jsi to! Bylo to číslo "+ answer +" Zabralo ti to "+ moznosti +" pokusů")
            running = false;
        }
    }

}