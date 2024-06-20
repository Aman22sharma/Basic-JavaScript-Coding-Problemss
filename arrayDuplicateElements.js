/* Find Duplicates element from an given array
Input Array : [1,2,2,2,2,3,4,5,4,4,4];
Output : [ 2, 2, 2, 4, 4, 4 ]; */


const inputArr = [1,2,2,2,2,3,4,5,4,4,4];
const duplicateArr = inputArr.filter((ele,index,arr) => arr.indexOf(ele) !==index);
//const duplicateArr = inputArr.filter((ele,index) => inputArr.indexOf(ele) !==index);
console.log(duplicateArr);


/* Find the count of every element occurence in an array.
Input Array : [1,1,1,2,2,2,3,3,4,3,2,65,2];
Output : { '1': 3, '2': 5, '3': 3, '4': 1, '65': 1 }; */

var input1Arr = [1,1,1,2,2,2,3,3,4,3,2,65,2];

function findOccurrence(arr){
    let outputObj = {}
    for(let num of arr){
        outputObj[num] = (outputObj[num] || 0) +1;
    }
    return outputObj;
}

console.log(findOccurrence(input1Arr)) // Output : { '1': 3, '2': 5, '3': 3, '4': 1, '65': 1 }

const arr = [
    {
        name: 'John',
        location: 'Los Angeles',
    },
    {
        name: 'Kate',
        location: 'New York',
    },
    {
        name: 'Mike',
        location: 'New York',
    },
];

let duplicateEleArr = arr.filter((obj, index) => {
    return arr.findIndex((item) => item.location === obj.location) !== index;
})

console.log(duplicateEleArr)

/* Find the unique element from an array without using any inbuilt function
input = [-1, -7, -3, -5, -9, -1, -2, -3, -4, -5]
output = [-1, -7, -3, -5,-9, -2, -4]
*/
const input = [-1, -7, -3, -5, -9, -1, -2, -3, -4, -5]

function removeDuplicates(inputArr) {
    const uniqueArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        let isDuplicateElement = false;
        for (let j = 0; j < uniqueArr.length; j++) {
            if (inputArr[i] == uniqueArr[j]) {
                isDuplicateElement = true;
                break;
            }
        }
        if (isDuplicateElement == false) {
            uniqueArr.push(inputArr[i]);
        }
    }
    return uniqueArr;
}

console.log(removeDuplicates(input))
