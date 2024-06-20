/* Find the secand larget element from an array;
input = [11,12,31,16,12,4,5,16,11,31]
output = 16 */
const input = [11, 12, 31, 16, 12, 4, 5, 16, 11, 31]

function secandLarget(inputArr) {
    let firstLargest = inputArr[0];
    let secandLargest = inputArr[1];

    for (let element of inputArr) {
        if (element > firstLargest) {
            secandLargest = firstLargest;
            firstLargest = element;
        } else {
            if (element > secandLargest && element < firstLargest) {
                secandLargest = element;
            }
        }
    }

    return secandLargest;
}

console.log(secandLarget(input));