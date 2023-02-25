

/********************** Factorial Function **********************/
console.log("/********************** Factorial Function **********************/")
const calculateFactorial = (factorialNumber) => {
    let result = 1;
    if(!isNaN(factorialNumber) && factorialNumber > 0 && factorialNumber !== Infinity)
    {
        for (let i = 1; i <= factorialNumber; i++ )
        {
            result *= i;
        }
        return  result;
    }
    else if (factorialNumber === 0)
        return 1;
    else if(factorialNumber < 0){
        return "Pozitif deger sağlamanız gerekiyor"
    }
    return  "Lütfen numerik bir değer veriniz"
}

// console.log(isNaN(true)) = false
// console.log(isNaN(null)) = false

console.log(calculateFactorial(5))

/***************Variadic Function *******************/

console.log("/********************* Variadic Function ************************/")
const calculateArg = (...args) => {
    const numberArray = args.filter(x => typeof x === "number")
    return numberArray.reduce((acc, val) => acc * val)
}
console.log(calculateArg(5,4,1, "ee"))




