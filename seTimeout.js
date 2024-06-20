/* Write a sleep function that will wait for the given deplaytime after that next line of code need to execute 
   Input : 
   console.log("hello");
   await sleep(5000); // it will wait for 5 sec then it will print bye
   console.log("bye")
   
   output : 
   hello
   promise (wait for 5 seccand)
   bye
 */

function sleep(delayTime) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(true);
        }, delayTime);
    })
}

async function printer() {
    console.log("hello");
    await sleep(5000);
    console.log("bye")
}

console.log(printer())