/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 25; // Change this to test different ages
let isStudent = true; // Change this to test student status

let fare;

if (age < 10) {
  fare = 0;
} else if (isStudent) {
  fare = 800 * 0.5; // 50% discount
} else if (age >= 60) {
  fare = 800 * 0.85; // 15% discount
} else {
  fare = 800; // regular fare
}

console.log("Ticket Fare: " + fare + " tk");
