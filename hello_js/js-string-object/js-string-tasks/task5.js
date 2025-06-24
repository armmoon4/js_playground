let str = "capitalize every first letter of each word";

let result = str
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(result);
