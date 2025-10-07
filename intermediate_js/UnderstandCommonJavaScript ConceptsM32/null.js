// let name = null; 
// console.log(typeof name); // "object"

// let name; 
// console.log(name); // undefined
let name = null;

function sum (a, b) {
    console.log(a , b);
}
sum(); // 2 undefined

// const result = sum(2, 3);
// console.log(result); // undefined
// console.log(typeof result); // undefined
// console.log(result + 5); // NaN

function sum (a, b) {
    return;
}
sum(3 , 3); // 2 undefined