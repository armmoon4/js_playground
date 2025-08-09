// for of use on array or string not in objects
// for in use on objects
const numbers = [1, 2, 3, 4, 5];
// for(let i = 0; i < numbers.length; i++) 
// while

for(const num of numbers) {
//   console.log(num);
}

const nobab = "siraj uddolaa";
for(const char of nobab) {
  // console.log(char);
}

const glass = {
    name: 'glass',
    color: 'transparent',
    price: 100,
    isClean: true
};

for(const key of glass){
    console.log(key);   
// This will throw an error because objects are not iterable    
}

// solution
for(const key in glass) {
  console.log(key);
//   
}