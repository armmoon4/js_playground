// console.log("helooooooooooooooo");
// console.log("helooooooooooooooo");
// console.log("helooooooooooooooo");

// function sum() {
//     let a = 10; 
//     let b = 20;
//     return a + b;
// }
// sum();
// console.log("helooooooooooooooo");

const num1 = 10;
const num2 = 20;

console.log('i am first');
setTimeout(test, 0);  // i am fetch 1st
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())  
//     .then((data) => {               // i am fetch 2nd 
//         console.log(data);
//     }); 
console.log('i am third');    

const result = num1 + num2;

console.log(result);

function test () {
    console.log("i am inside test function");
}