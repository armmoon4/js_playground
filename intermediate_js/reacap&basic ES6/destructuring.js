const actor = {
  name: 'John Doe',
  age: 30,
  phone: '123-456-7890',
  money: 1000546974
}


// if right side is an object left side of destructuring must be an object
// use the property name as variable that contains the property value
const{phone}= actor;
console.log(phone); // '123-456-7890'


// const phone = actor.phone;
// console.log(phone); // '123-456-7890'
// console.log(actor.phone); // '123-456-7890'

// const name = actor.name;
// const age = actor.age;



// array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, third] = numbers;
console.log(first); // 1
console.log(second); // 2       

// advanced destructuring
function doubleThem(a , b){
    return [a * 2, b * 2];
}

const [firstDouble, secondDouble] = doubleThem(2, 3);
console.log(firstDouble , secondDouble); // 4      