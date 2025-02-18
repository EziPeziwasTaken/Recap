// object = A collection of related properties and/or methods
//          Can represent real world objects (people, products, places)
//          object = {key:value,
//                    functions()}

const person1 = {
    firstName: "Spongebob",
    lastName:  "Squarepant",
    age: 30,
    isEmployed: true, 
    sayHello: function(){console.log("Hi! I'm Patrick!")},
    eat: function(){console.log("I'm eating a Krabby Patty")},
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => console.log("Hey, I'm Patrick..."),
    eat: () => console.log("I'm eating roasted beef, chicken and pizza"),
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
console.log(person1.sayHello);
console.log(person1.eat);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
console.log(person2.sayHello);
console.log(person2.eat);