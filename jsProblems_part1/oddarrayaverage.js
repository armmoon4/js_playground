function averageOfOdds(arr) {
    let sum = 0;
    let count = 0;

    for (let num of arr) {
        if (num % 2 !== 0) { 
            sum += num;
            count++;
        }
    }

    if (count === 0) {
        return 0;
    }

    return sum / count;
}


// Example usage:
let numbers = [1, 2, 3, 4, 5, 6, 7];
let average = averageOfOdds(numbers);
console.log("Average of odd numbers:", average);
