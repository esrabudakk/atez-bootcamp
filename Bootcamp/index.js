
// string data type
var sth = "ATEZ BOOTCAMP"

//number data
var number = 123

//boolean data
var isTrue = true;

// or
var isFalse = false;

// undefined datatype
var samim;
console.log("undefined ", samim)

console.log("string data", sth)

//null data
var nullData = null;
console.log(nullData)

//object data
var testObj = {
    sth : "ATEZ",
    number: 123,
    isTrue: false,
}

//içindeki objelere erişim
console.log(testObj.number)

var testArray = [
    123, 213, 32151, 54444,
    testObj = {
    sth: "atez",
        number: 1333,
        isTrue: false,
    }
]


console.log("\n")
console.log("unmutated", testObj)

testObj.sth = "another bootcamp";
console.log("mutated", testObj)


// block scope

const globalScope  =    "Global scope";

function functionScope(){
    const fnSc = "Function scope variable";
    // fnSc = "new value"; --->const read only value değişim yaptırmaz.

    var abcc = "esra"
    console.log(abcc)
}

console.log("Global-->", globalScope);
// console.log("Function-->", fnSC);

console.log(typeof globalScope)
console.log(typeof undefined)
console.log(typeof null)