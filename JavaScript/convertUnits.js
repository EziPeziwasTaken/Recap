//PŘEVEDENÍ FAHRENHEIT A CELSIUS

const textBox = document.getElementById("textBox");
const doFahrenheit = document.getElementById("doFahrenheit");
const doCelsia = document.getElementById("doCelsia");
const vysledek = document.getElementById("vysledek");
let teplota;

function prevest(){
    if(doFahrenheit.checked){
        teplota = Number(textBox.value);
        teplota = teplota * 9 / 5 + 32;
        vysledek.textContent = teplota.toFixed(1) +"°F";
    }
    else if(doCelsia.checked){
        teplota = Number(textBox.value);
        teplota = (teplota - 32) * 5 / 9;
        vysledek.textContent = teplota.toFixed(1) +"°C";
    }
    else{
        vysledek.textContent = "Vyber jednotku";
    }
}