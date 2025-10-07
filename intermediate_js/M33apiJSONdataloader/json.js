const person = {
  name: "John Doe",
  age: 30,
  city: "New York"
};

const jsonString = JSON.stringify(person);
console.log(jsonString);

console.log(typeof jsonString); // "string"
console.log(typeof person); // "object"

// json to object
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);