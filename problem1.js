//TODO Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

// The program should read a year from the user and display a message indicating whether the year is a leap year.
// The year is a leap year if it is divisible by 4, unless it is a century year that is not divisible by 400.

// Sample run:
// Enter a year: 2012
// 2012 is not a leap year

//Solution1:


var year = 2012;

if (leapyear(year)){
    console.log(year + " is a leap year");
}else{
    console.log(year + " is not a leap year");
}
 
// Output: 2012 is a leap year


if (year % 4 == 0) {
    if (year % 100 == 0 && year % 400 != 0) {
        console.log(year + " is not a leap year");
    } else {
        console.log(year + " is a leap year");
    }
}else{
    console.log(year + " is not a leap year");
}

// Output: 2012 is a leap year

//Solution 2:

function leapyear(year){
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(1996));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));

/* Output: 
true
true
false
false
false */
