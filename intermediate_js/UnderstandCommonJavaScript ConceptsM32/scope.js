function sum(num1, num2) {
  const restult = num1 + num2;

  if(true){
    var result2 = num1 - num2;
    console.log(result2); // This will work
  }
}
console.log(restult); // ReferenceError: restult is not defined

console.log(result2); // This will work because var is function-scoped