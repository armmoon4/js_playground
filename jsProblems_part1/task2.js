function countOccurrences(array, number) {
  let count = 0;
  for (const item of array) {
    if (item === number) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrences([5, 6, 11, 12, 98, 5], 5));  
console.log(countOccurrences([5, 6, 11, 12, 98, 5], 25)); 
