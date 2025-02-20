//String.slice(start, end);
const jmeno = "Standa Čech";

//let krestne_jmeno = jmeno.slice(0,6);
//let prijmeni = jmeno.slice(7,11);
let krestne_jmeno = jmeno.slice(0, jmeno.indexOf(" "));
let prijmeni = jmeno.slice(jmeno.indexOf(" ") +1)

console.log(krestne_jmeno);
console.log(prijmeni);

let prvniChar = jmeno.slice(0,1);
let posledniChar = jmeno.slice(-1); //odzadu
console.log(prvniChar,posledniChar);