const first = 'Jaan';
const last = 'Pakhiii';
const greeting = 'potas potas';
const name = first + ' ' + last + ' ' + greeting;
console.log(name);

const a = 6;
const b = 7;    
const sum = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b);
const math = `The sum of ${a} and ${b} is ${a + b}`;
console.log(math);

const email = 'hi john\n' 
                    + "how are you? ";
console.log(email);

// Template literals allow for multi-line strings and string interpolation
const multiLine = `This is a string
that spans multiple lines
and can include variables like ${first} and ${last}.`;      
console.log(multiLine); 