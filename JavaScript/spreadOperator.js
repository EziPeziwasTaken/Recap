//  ... allows an iterable such as an array or string
//  to be expanded into seperate elements
//  (unpacks the elements)


let cisla = [1, 2, 3, 4, 5];
let maximum = Math.max(...cisla); //bez "..." = NaN
let minimum = Math.min(...cisla);
console.log(minimum);

let jmeno = "Stanley";
//let pismena = [...jmeno];
let pismena = [...jmeno].join("-");
console.log(pismena);

let ovoce = ["Jablko", "Banán", "Hruška"];
let zelenina = ["Salát", "Cibule", "Kukuřice"];
let jidlo = [...ovoce, ...zelenina, "mléko", "kuře"];
console.log(jidlo);