// console.log('hello world!');

// var, let, and const in JavaScript
// var no reason to use var
// let allow you to declare variables that can be reassigned
// const allows you to declare variables that cannot be reassigned

const money = 45; 
const rich = money + 100; // rich is a constant value of 145
// rich = 200; // This will throw an error because rich is a constant       
// console.log(rich); // Output: 145    

let count = 0; // count can be reassigned
count = count + 10; // count is now 1
// console.log(count); // Output: 10

const number = [22, 33, 44]; // number is a constant array
number[0] = 55; // This is allowed because we are modifying the contents of the array, not reassigning it
number.push(66); // This is also allowed
console.log(number); // Output: [22, 33, 44]

// objects can also be declared with const
const person = {
    name: 'John',
    age: 30
};
person.name = 'Doe'; // This is allowed because we are modifying the property of the object
// person = { name: 'Jane' }; // This will throw an error because we cannot reassign a const object     
console.log(person); // Output: { name: 'John', age: 30 }


// looping with var, let, and const
for (var i = 0; i < 5; i++) {
    console.log('var loop:', i);
}       

console.log('Final value of i with var:', i); // Output: 5  

for (let j = 0; j < 5; j++) {
    console.log('let loop:', j);
}   
// console.log('Final value of j with let:', j); // This will throw an error because j is not defined outside the loop  

for (const k = 0; k < 5; k++) {
    console.log('const loop:', k);
}    
// console.log('Final value of k with const:', k); // This will throw an error because k is not defined outside the loop    

