let x = "reverseEEEEEE"; 

let count = 0; 
for (let i = 0; i < x.length; i++) {
    if (x[i] === "e" || x[i]==="E") {
        count++; 
    }
}
console.log(count);
