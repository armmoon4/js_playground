function count_zero(binaryStr) {
    let count = 0;

    for (let i = 0; i < binaryStr.length; i++) {
        if (binaryStr[i] === '0') {
            count++;
        }
    }

    return count;
}

const binary = "1010010001";
const zeroCount = count_zero(binary);
console.log("Number of 0's:", zeroCount); 
