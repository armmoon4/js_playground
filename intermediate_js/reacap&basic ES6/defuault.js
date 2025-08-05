// Using let and const in functions
function exampleFunction() {
    let localVar = 'I am local'; // localVar is only accessible within this function
    const localConst = 'I am also local'; // localConst is also only accessible within this function
    console.log(localVar); // Output: I am local
    console.log(localConst); // Output: I am also local
}
exampleFunction();  
// console.log(localVar); // This will throw an error because localVar is not defined outside the function
// console.log(localConst); // This will throw an error because localConst is not defined outside the function  
// Using var in functions
function anotherFunction() {
    var functionVar = 'I am a function variable'; // functionVar is accessible within this function
    console.log(functionVar); // Output: I am a function variable
}   