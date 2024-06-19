
/* It will wait for the given time onec the time will be completed then the code will give the result
setTimeout(function(){
    console.log("Wait for 5 sec then print the value")
},5000) 

let a = setTimeout(function () {
    console.log("Wait for 5 sec then print the value")
}, 5000)
// a is the timerId
clearTimeout(a) // It will cancel the setTimeout
*/

for(let i=0;i<4;i++){
    setTimeout(() => {
        console.log(i)
    }, 1000);
}