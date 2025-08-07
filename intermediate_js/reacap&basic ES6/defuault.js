// defult if value is not provided
// Default parameters in ES6    
function add(num1, num2 = 11) {
    const result = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is ${result}`);
    return result;  
}

// const sum = add(5, 10);
const sum = add(5);