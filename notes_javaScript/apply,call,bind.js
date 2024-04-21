const person1 = {
    Fname:"Aman",
    lastName: "Sharma"
}

function getFullName(){
    return this.name + " " + this.lastName
}

const person2 = {
    Fname: "Ankur",
    lastName: "Sharma",
}

console.log(getFullName.call(person2))
console.log(getFullName.apply(person2, ['num1','num2']))
console.log(getFullName.apply(person2, ['num1', 'num2'])) // It will make a copy