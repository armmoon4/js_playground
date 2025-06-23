const heights = [65, 66, 68, 72, 78, 60, 65, 66];

function getMax(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const min = getMax(heights);
console.log('min value is', min);
