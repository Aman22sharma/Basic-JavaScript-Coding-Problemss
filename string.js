/*  How to find number of occurences of a character in a string.
    input String = 'Hello world' //INPUT1
    given character = 'l' //INPUT2
    output : 3 */

function findNOOC(inputStr, inputChar) {
    let count = 0;
    for (let char of inputStr.trim()) {
        if (char.toLowerCase() == inputChar.toLowerCase()) {
            count++;
        }
    }

    return count;
}

console.log(findNOOC('hello world', "l"));
// output : 3

/*  write a program that returs a revers of a strign;
    arr1 = "hello"
    output : "olleh" */

TODO://Approch 1
function reversString(inputStr){
  let reversedString = "";
  for(let i=inputStr.length-1;i>=0;i--){
    reversedString+=inputStr[i]
    // console.log(inputStr[i])
  }
  return reversedString;
}

console.log(reversString("hello"))

//Approch 2

function reversString(inputStr){
  let reversedString = "";
  let splitedStr = inputStr.split("")
  reversedString = splitedStr.reverse().join("")
  return reversedString;
}

console.log(reversString("hello"))

//Approch 3

function reversString(inputStr) {
    let reversedString = [];
    let splitedStr = inputStr.split("")
    for (let char of splitedStr) {
        reversedString.unshift(char)
    }
    return reversedString.join("");
}

console.log(reversString("hello"));

/*  write a program that returs a revers of a strign;
    input = "hello"
    output : "olleh" */

function reverseSentance(inputStr) {
    let reversedWord = "";
    let splitedString = inputStr.split(" ");
    for (let i = splitedString.length - 1; i >= 0; i--) {
        reversedWord += `${splitedString[i]} `;
    }
    return reversedWord;
}

console.log(reverseSentance("aman sharma"))

/*  write a program that returs a revers of a word from an sentance;
    input = "aman sharma"
    output : "nama amrahs" */

function reverseSentance(inputStr) {
    let reversedWord = "";
    let splitedString = inputStr.split(" ");
    for (let i = 0; i < splitedString.length; i++) {
        // console.log(splitedString[i])
        let eachWord = splitedString[i]
        for (let j = eachWord.length - 1; j >= 0; j--) {
            reversedWord += eachWord[j];
        }
        reversedWord = `${reversedWord} `
    }
    return reversedWord;
}

console.log(reverseSentance("aman sharma"))

/*  write a program that returs a revers the whole sentance;
    input = "aman sharma"
    output : "amrahs nama" */

function reverseSentance(inputStr) {
    let reversedWord = "";
    let splitedString = inputStr.split("");
    for (let i = splitedString.length - 1; i >= 0; i--) {
        let eachWord = splitedString[i];
        let word = eachWord.split("").join("")
        reversedWord += word;
    }
    return reversedWord;
}

console.log(reverseSentance("aman sharma"))


/*  write a program that returs the longest word in the sentance;
    input = "aman sharma"
    output : "sharma" */

function reverseSentance(inputStr) {
    let splitedSantence = inputStr.split(" ")
    let longestWord = splitedSantence[0]
    for (let item of splitedSantence) {
        if (item.length > longestWord.length) {
            longestWord = item;
        }
    }
    return longestWord;
}

console.log(reverseSentance("aman sharma"))

/*  write a program to check whether a given string is palindrom or not;
    input = "aman"
    output : "aman is not a palindrom" */

function reverseSentance(inputStr) {
    let reversedStr = inputStr.split("").reverse().join("")
    if (reversedStr.toLowerCase() == inputStr.toLowerCase()) {
        return `${inputStr} is a palindrom`;
    }
    return `${inputStr} is not a palindrom`;
}
console.log(reverseSentance("ama"))

/*  write a program to return number of vowels in a string;
    input = 'aiooures'
    output : 2 */

function findNumberOfvowels(inputStr) {
    let vowelCount = "";
    let vowel = 'aeiou';
    for (let char of inputStr.toLowerCase()) {
        if (vowel.includes(char)) {
            vowelCount++;
        }
    }
    return vowelCount;
}

console.log(findNumberOfvowels('aiooures'))