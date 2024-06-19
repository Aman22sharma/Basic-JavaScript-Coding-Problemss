/*  Object Copy by reference (Copy by reference)

let obj = {name : 'Aman'}
let obj1 = obj

Memory :
location - 1000 -> obj,obj1 - It will be copy in the same memeroy location that's why we call it as a copy by references. 

It will only copy the memory location the the value inside the object.

TODO:Reference means it will point to  same memory location.
*/ 
// Example : 
let obj = { name: 'Aman' }
let obj1 = obj

obj.name = 'AMAN KUMAR'
console.log(obj1) // Output : { name: 'AMAN KUMAR' }
obj1.name = 'AMAN KUMAR SHARMA'
console.log(obj) // Output : { name: 'AMAN KUMAR' }


/* ============================== Deep Copy (Copy by value) ======================== //

- Shallow Copy using the spread operator or Object.assign() or {...obj}:
- It will copy the top level obj value. */

let obj = {
    userName : 'Aman Kuar Sharma',
    address: {
        city: 'Thawe',
        pincode: 841440
    }
}

let copyObj = {...obj} // Object distructuring
//let copyObj = Object.assign({},obj) // using Object.assign method
copyObj.name = 'Sumit'
console.log("obj", obj) // Output : { userName: 'Aman Kuar Sharma',address: { city: 'Thawe', pincode: 841440 }} 
console.log("copyObj", copyObj) // Output : { userName: 'Sumit', address: { city: 'Thawe', pincode: 841440 } }

/* It will copy the top level obj value.
   It will not work for nested object if we will update the nested obj value it will be updated in both original object as well as in copy object. */

copyObj.address.city = 'Gopalganj'
console.log("obj", obj) // Output : { userName: 'Aman Kuar Sharma',address: { city: 'Gopalganj', pincode: 841440 }}
console.log("copyObj", copyObj) // Output : { userName: 'Aman Kuar Sharma',address: { city: 'Gopalganj', pincode: 841440 }}

/* ============================== Deep Copy (Copy by value) ========================*/

/* It will copy the value of the object.
JSON.Stringyfy(object) // It will not work for function key and date key. */

let obj = {
    userName: 'Aman Kuar Sharma',
    address: {
        city: 'Thawe',
        pincode: 841440
    },
    getFullName : function(){
        return this.userName;
    },
    data: new data()
}

let copyObj = JSON.parse(JSON.stringify(obj)); //It will not work properly for dat key, fucntion keys will deleted from the copy obj.
console.log("obj", obj) //
/* Output : 
{
  userName: 'Aman Kuar Sharma',
  address: { city: 'Thawe', pincode: 841440 },
  getFullName: [Function: getFullName],
  data: 2024-06-14T17:21:52.010Z
} */

console.log("copyObj", copyObj) 
/* Output : 
{
  userName: 'Aman Kuar Sharma',
  address: { city: 'Thawe', pincode: 841440 },
  data: '2024-06-14T17:21:52.010Z'
}*/

/* _.deepCopy(object) It will work property copy the complete value. It will not change value of origin object */
let copyObj = _.deepCopy(obj);


