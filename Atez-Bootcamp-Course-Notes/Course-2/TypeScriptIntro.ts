
// string - number - boolean

let stringVal:string = "Some string Value"
let numberValue:number = 12212
let boolValue:boolean = true
// any type

let userInput: number[] = []

// userInput = ['someVal'] --> error: because of string value
// userInput = 3 --> error: because is not array

// Union Type example
const userLogin = (email: string, password: string | number) => {
   typeof password  === "string"? password = password.toUpperCase() : "error"

    return email + password
}

console.log(userLogin('@outlook.com', 'abcdfFGG'))

const  Animal = {
    name: "Java",
    type: "Persian",
    age:3
}

interface Animal {
    name: string;
    type:string
    age: number
    eyeColor?:string
    whiskers?:boolean
}

const Java:Animal = {
    name: "Java",
    type:"Cat",
    age: 3,
}

console.log("Animal: ",Java)
const createCatUser = (cat: {name: string, type:string, age:number}) => {
    return `Our cat name is ${cat.name} and she is ${cat.type} also she is ${cat.age}`
}
console.log(createCatUser(Animal))


// types
type Cat = {

}

/*next week
* generics & any
* Enums
* Deep Dive Functions
* Deep Dive Inheritance and extends keyword
* Classes
* Architecture filing(models, enums, classes)
* */