let jmeno = window.prompt("Jaké je tvé jméno");

                        //NO METHOD CHAINING

console.log(jmeno);

jmeno = jmeno.trim();
let pismeno = jmeno.charAt(0);
pismeno = pismeno.toUpperCase();
console.log(jmeno);

let dalsiChar = jmeno.slice(1);
dalsiChar = dalsiChar.toLowerCase();
jmeno = pismeno + dalsiChar;

console.log(jmeno);
                        //METHOD CHAINING

jmeno = jmeno.trim().charAt(0).toUpperCase() + jmeno.trim().slice(1).toLowerCase();
console.log(jmeno);
