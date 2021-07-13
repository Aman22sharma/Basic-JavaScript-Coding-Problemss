//TODO Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

// The area of a triangle is calculated using Heron's formula
// area = s(s-a)(s-b)(s-c) / 4
// where s = (a+b+c)/2
// a, b, and c are the lengths of the sides of the triangle

// The function should return the area of the triangle

// Example:
// areaOfTriangle(5, 6, 7) should return 6

//Solution 1:

function areaOfTriangle(a, b, c) {
    var s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

console.log(areaOfTriangle(5, 6, 7)); // 14.69

//Solution 2:

var side1 = 5;
var side2 = 6;
var side3 = 7;

var s = (side1 + side2 + side3) / 2;

var result = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

console.log(result); // 14.69


