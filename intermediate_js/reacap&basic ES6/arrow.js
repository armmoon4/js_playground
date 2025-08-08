// This code demonstrates the use of a simple function to add two numbers in JavaScript.
// The function is defined using the traditional function syntax.
// function add (a, b) {
//     const resut = a + b;
//     console.log(resut);   
//     return resut;
// }
// The function is then called with two arguments, and the result is logged to the console.
// The code is commented out to avoid execution in this context.    
function add (a, b) {  
    return a + b;
}


// fuction expression
// The following code defines a function expression that adds two numbers.
const add2 = function (a, b) {
    return a + b;
}

// arrow function
const add3 = (a, b) => a + b;

const add4 = (num1 , num2 , num3 , num4) => num1 + num2 + num3 + num4;

const sum = add4(2, 2, 2, 2);
console.log(sum);