//TODO Write a JavaScript program to calculate number of days left until next Christmas.

var today = new Date();
var nextXmas = new Date("December 25, 2021");
var daysLeft = (nextXmas - today) / (1000 * 60 * 60 * 24);
console.log(daysLeft);

// Output: 164