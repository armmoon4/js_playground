console.log("This is the start of the ES6 module.");
// const let 
const person = {
    name: "John",
    age: 30
}
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

delete person.age;
console.log(person);    



// object destructuring
const {name, age} = person;
console.log(name, age);

// array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first, second, rest);

// spread operator
const newNumbers = [...numbers, 6, 7, 8];
console.log(newNumbers);

// template strings
console.log(`anything can be embeeded here
    like this is a new line
    we can acces array elements like ${newNumbers[0]}
    we can also do math like ${2 + 2}
    we can also call functions like ${Math.random()}`);
