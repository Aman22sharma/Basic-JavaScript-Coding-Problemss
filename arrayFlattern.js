/*Flattern array
  input : [1,2,3,4,5,6,[45,34,3,[22,33,32,87],[1,2]]]
  output: [1, 2, 3, 4, 5, 6, 45, 34, 3, 22, 33, 32, 87, 1, 2] */

// Simple approach using javaScript inbuilt method;

let flatternArr = [1, 2, 3, 4, 5, 6, [45, 34, 3, [22, 33, 32, 87], [1, 2]]];

let outFlatternArr = flatternArr.flat()

//Programatical Arpproches: 

//Approach 1 - 
var outputFlatternArr = []
function falttern(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            falttern(arr[i]);
        } else {
            outFlatternArr.push(arr[i]);
        }
    }
}

falttern(arr)
console.log(outputFlatternArr) //Output - [1, 2, 3, 4, 5, 6, 45, 34, 3, 22, 33, 32, 87, 1, 2]
