// (...rest) allow a funciton work with a veriable 
// number of arguments by bunding them into an array

// spread = expands an array into seperate elements
// rest   = bundles seperates elements in an array

function otevritLednici(...jidla){
    console.log(jidla)
}
function vzitJidlo(...jidla){
    return jidla;
}


const jidlo1 = "pizza";
const jidlo2 = "sushi";
const jidlo3 = "brokolice";
const jidlo4 = "zmrzlina";
const jidlo5 = "burger";

//otevritLednici(jidlo1, jidlo2, jidlo3, jidlo4, jidlo5);
const jidla = vzitJidlo(jidlo1, jidlo2, jidlo3, jidlo4, jidlo5);

console.log(jidla)

function suma(...numbers){
    let vysledek = 0;
    for(let number of numbers){
        vysledek += number;
    }
    return vysledek;
}

function prumer(...numbers){
    let vysledek = 0;
    for(let number of numbers){
        vysledek += number;
    }
    return vysledek / numbers.length;
}
const total = prumer(75, 100, 85, 90, 50);
console.log(total);


function combineString(...strings){
    return strings.join(" ");
}
const celeJmeno = combineString("Mr.", "SpongeBob", "Squarepants", "III");
console.log(celeJmeno);

