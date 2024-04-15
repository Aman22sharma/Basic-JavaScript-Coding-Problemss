/* Given an array, print the Next Greater Element (NGE) for every element. 
The Next greater Element for an element x is the first greater element on the right side of x in the array. Elements for which no greater element exist, consider the next greater element as -1. 

Input: arr[] = [ 4 , 5 , 2 , 25 ]
Output:  4–>5
         5–>25
         2–>25
         25–>-1
Explanation: except 25 every element has an element greater than them present on the right side */
var inputArr = [4, 5, 2, 25];

function NGE(arr) {
    let outputResult = '', next = '';
    for (let i = 0; i < arr.length; i++) {
        next = -1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                next = arr[j];
                break;
            }
        }
        outputResult += `${arr[i]}->${next}\n`;
    }
    return outputResult;
}

console.log(NGE(inputArr)) 
                                               