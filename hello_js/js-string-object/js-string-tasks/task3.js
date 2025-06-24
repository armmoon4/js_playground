let str = "education";
str = str.toLowerCase();

let vowels = ['a', 'e', 'i', 'o', 'u'];
let hasAllVowels = vowels.every(vowel => str.includes(vowel));

console.log(hasAllVowels);
