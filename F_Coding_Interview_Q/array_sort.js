/*Find duplicates element from an arrray? */

TODO: sort() //This will work for only single digit number or single character.

let inputArrNum = [2,3,4,5,1,7,8]

console.log(inputArrNum.sort()) 
//OUTPUT: [1,2,3,4,5,7,8]

let inputArrStr = ['a', 'g', 'd', 'z', 'c', 'x', 'u']

console.log(inputArrStr.sort())
//OUTPUT: ['a','c','d','g','u','x','z']

let inputArrStr1 = ['ama', 'ga', 'abc', 'd', 'z', 'c', 'x', 'u']

console.log(inputArrStr1.sort());
//Output: ['abc', 'ama', 'c','d', 'ga', 'u','x', 'z']

let inputArrNum1 = [222, 31, 43, 5, 14, 79, 8]

console.log(inputArrNum1.sort())// Wrong it will not sort.
//OUTPUT: []

let sortedElement = inputArrNum1.sort((pre, curr) => pre - curr)
console.log(sortedElement)
//OUTPUT: [5,8,14,31,43,79,222]

//MIX OF NUMBER AND ALPHABET ARRAY

let inputArrNumAlpha = [2, 3, 1, 5, 8, 'b', 'a'] //or [ 'b', 'a',2, 3, 1, 5, 8]
console.log(inputArrNumAlpha.sort())
//OUTPUT: [1, 2, 3, 5, 8, 'a', 'b']


let inputArrNumAlpha1 = [2, 3, 1, 5, 8, 'B', 'a'] //or [ 'b', 'a',2, 3, 1, 5, 8]
console.log(inputArrNumAlpha.sort())
//OUTPUT: [1, 2, 3, 5, 8, 'B', 'a'] // priority - Number -> Caps alphabet -> Small aplhabet