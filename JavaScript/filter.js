// .filter() = creates a new array by filtering out elements

/*
let numbers = [1,2,3,5,6,7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(oddNums);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

const  ages = [16, 17, 18, 18, 19, 20, 40];
let adults = ages.filter(adult);

console.log(adults);

function adult(element){
    return element > 17;
}
*/
const words = ["Apple", "Hruška", "Banán", "Jablko", "Citrón", "Granátové Jablko"];
const delka = words.filter(wordLenght);

console.log(delka);

function wordLenght(element){
    return element.length < 8;
}