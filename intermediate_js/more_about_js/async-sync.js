const loadData = () => {
    console.log("this is first"); 
    console.log("this is second");
    const result = 100 + 200;
    console.log(result);
    console.log("this is third");
    console.log("this is fourth");
}
loadData();

// Synchronous programming: line by line execution
// Asynchronous programming: line by line execution is not guaranteed
// setTimeout, fetch, XMLHttpRequest, etc. are examples of asynchronous operations  
setTimeout(() => {
    console.log("this is async");
}, 3000); // 3 seconds delay

console.log("this is last");    
console.log("this is another last");    
