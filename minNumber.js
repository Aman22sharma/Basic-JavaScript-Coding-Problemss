/* Find Minimun number from an given array
input Array : [2,3,4,56,67,454]
Output : 2 */

var inputArr = [2, 3, 4, 56, 67, 454];

function findMinNumber(numberArr){
    let minNumber = numberArr[0];
    for(let num of numberArr){
        if (num < minNumber) {
            minNumber = num;
        }
    }
    return minNumber;
}

console.log(findMinNumber(inputArr)); // output 2

const findMinNumber1 = (arr) => {
    return arr.reduce((pre, current) => {
        console.log(pre, current)
        return pre > current ? current : pre;
    })
}

console.log(findMinNumber1(inputArr)) // output 2