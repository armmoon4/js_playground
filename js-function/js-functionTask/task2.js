function isEven(number){
    if(number % 2 ===0){
        const result = number / 2 ; 
        return result; 
    }
    else{
        const result = number * 2; 
        return result; 
    }
}

const fuck = isEven(4); 
console.log(fuck); 