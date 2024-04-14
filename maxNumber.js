/* Find Minimun number from an given array
input Array : [2,3,4,56,67,454]
Output :  454*/

var inputArr = [2, 3, 4, 56, 67, 454];

function findMaxNumber(numberArr) {
    let maxNumber = numberArr[0];
    for (let num of numberArr) {
        if (num > maxNumber) {
            maxNumber = num;
        }
    }
    return maxNumber;
}

console.log(findMaxNumber(inputArr)); // output 454

const findMaxNumber1 = (arr) => {
    return arr.reduce((pre, current) => {
        return current > pre ? current : pre;
    })
}

console.log(findMaxNumber1(inputArr)) // output 454