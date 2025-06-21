function make_avg(arr, size) {
    if (size === 0) return 0;

    let sum = 0;
    for (let i = 0; i < size; i++) {
        sum += arr[i];
    }

    return sum / size;
}

// Example usage:
const numbers = [10, 20, 30, 40, 50];
const avg = make_avg(numbers, numbers.length);
console.log("Average:", avg);
