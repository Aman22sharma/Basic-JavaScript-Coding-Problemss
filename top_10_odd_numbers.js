// Find the top ten odd number from the given input

function topTenOddNo(number) {
    let resutlArr = [];
    for (let i = 1; i < number * 2; i++) {
        if (i % 2 !== 0) {
            resutlArr.push(i);
        }
    }
    return resutlArr.join(",");
}

console.log(topTenOddNo(10))
// OUTPUT : 1,3,5,7,9,11,13,15,17,19