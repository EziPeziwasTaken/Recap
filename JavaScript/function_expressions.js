// function declaration = define a reusable block of code that 
//                        perform a specitfic task

/*
function hallo(){
    console.log("Hello");
}*/
/*
const numbers = [1,2,3,4,5,6];
const squares = numbers.map(square);

console.log(square);

function square(element){
    return Math.pow(element, 2)
}*/

// function expressions = a way to define functions as
//                        values or variables
//  1. Callbacs in asynchornus operations
//  2. Higher-Order Functions
//  3. Closures
//  4. Even Listeners

const numbers = [1,2,3,4,5,6];
const squares = numbers.map(function (element){
    return Math.pow(element, 2)
});
console.log(squares);

const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
})
console.log(cubes);

const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
})
const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
})

console.log(evenNums);
console.log(oddNums);

const total = numbers.reduce(function(prvni, druhy){
    return prvni + druhy;
})
console.log(total);
/*
const hello = function(){
    console.log("Hello");
}

hello();

setTimeout(hello, 3000);

setTimeout(function(){
    console.log("Hello");
}, 3000);*/