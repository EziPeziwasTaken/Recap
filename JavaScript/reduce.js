// .reduce() = reduce the lements of an array to a single value

/*
const prices = [25, 16, 4, 10, 16, 2];

const total = prices.reduce(sum);

console.log(total.toFixed(2) + " czk");

function sum(previous, next){
    return previous + next;
}
*/
const grades = [75, 50, 80, 90, 65, 95];

const maximum = grades.reduce(getMax);

console.log(maximum);

function getMax(prvni, druhy){
    return Math.max(prvni, druhy);
}