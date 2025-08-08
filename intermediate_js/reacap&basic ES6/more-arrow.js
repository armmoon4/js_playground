const difference = (x, y) => x - y;
const multiply = (first , secound , third) => first * secound * third;


const getAge = (person) => person.age;
const student = { name: 'John', age: 20 };
const age = getAge(student);    
console.log(age); // 20


const getThird = numbers => numbers[2];
const third = getThird([1, 2, 3, 4, 5]);
console.log(third); // 3


const doubleIt = num => num * 2;


// no parameters
const getPI = () => Math.PI;

// large arrow function . if you want to get anything returned, you need to use curly braces and return statement   
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const product = x * y * z;
    return { sum, product };
}   

