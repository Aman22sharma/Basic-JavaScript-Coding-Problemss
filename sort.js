//Arrange the string in ascending order.
// inputString = "react is a library"
// Output: a is react library


var inputString = "react is a library"

function rearrangeString(srt) {
    let dataAsArray = srt.split(" ");
    dataAsArray.sort((a, b) => {
        return a.length - b.length;
    })
    return dataAsArray.join(" ");
}

console.log(rearrangeString(inputString))