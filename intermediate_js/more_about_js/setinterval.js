console.log(1);
console.log(2);
console.log(3);

let count = 0;
const clockId = setInterval(() => {
  count ++ ; 
  console.log("This message is shown after every 5 seconds", count);
  if(count === 5){
    clearInterval(clockId);
  }
}, 5000);


console.log(4);
console.log(5);
console.log(6);

// setTimeout(() => {
//   console.log("This message is shown after 5 seconds");
// }   , 5000);    


// setInterval(() => {
//   console.log("This message is shown after every 5 seconds");
// }, 5000);