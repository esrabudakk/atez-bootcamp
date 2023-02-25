///ES6 ES2022 ES2023 EcmaScript javascript


//spread operator
const calculateSum = (x,y,z) => {
    return x + y + z
}
const numberArray = [2,5,8, 5, 6]
console.log(calculateSum(...numberArray))

const carObj = {
    id:1,
    model: "Seat",
    color:"gray"
}
carObj.age = 35;


const newModelSpec = {
    maxSpeed:200,
    wheelCount : 4,
    age : 35,
}

const newChar = {...carObj, ...newModelSpec}
console.log("Car Model ", newChar)

const newNumberArr = [...numberArray, 1, 3,5]

console.log("new Number Arr" , ...new Set(newNumberArr))
console.log("new Number Arr" , newNumberArr)


/* Object Destructing */

const [x,y,...rest] = numberArray;

console.log('x:',x)
console.log('y:',y)
console.log('rest:', rest)


for (let i = 0; i < rest.length; i++)
{
    console.log("rest",i, ": ", rest[i])
}

// Ternary operator

console.log('Ternary', carObj.color === 'red' ? 'Color is red' : 'Color is not red')
console.log('Null', newModelSpec?.speedInterval || "0")
console.log('Null', newModelSpec?.speedInterval ?? "0")
