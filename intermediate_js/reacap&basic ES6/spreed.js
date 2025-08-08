const max = Math.max(1, 2, 3, 4, 5);
const numbers = [10, 2, 3, 4, 5];
const arrayMax = Math.max(...numbers);
console.log(arrayMax); // 10
console.log(max); // 5



// use spread operator to copy

const friends = [1, 2, 3];
const dosto = [...friends];
console.log(dosto); // [1, 2, 3]
friends.push(4);
console.log(dosto); // [1, 2, 3] - remains unchanged    
console.log(friends); // [1, 2, 3, 4] - original array is modified

// advanced example
const sonkha = [...friends, 4];
console.log(sonkha); // [1, 2, 3, 4] - new array with added element 

