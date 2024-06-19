let a = [] // memmory locatin 1000
let b = [] // memmory locatin 1001

console.log(a == b)  // (1000 == 1001) // returns false
console.log(a === b) // (1000 === 1001) // returns false

/* Both has different memmory location that's why it will compare with the respective memmory location so, it will be not same retrns false /*
*/
let a1 = [] // memmory locatin 1000
let b1 = a  // memmory locatin 1000

console.log(a1 == b1)  // (1000 == 1000) // returns true
console.log(a1 === b1) // (1000 === 1000) // returns true

// Both memmory location has same so, it retrns true

// NAN - Not a number : "Sting"/2 output- NAN, typeof(NAN)- 'number'

let a3 = 10 - -10;
console.log(a3) // output : 20

const set = new Set([1, 1, 2, 3, 5]) // Output : Set(4) { 1, 2, 3, 5 }

let data = {name : 'Aman'}
console.log(delete data.name) // it will return true
console.log(data) // {}