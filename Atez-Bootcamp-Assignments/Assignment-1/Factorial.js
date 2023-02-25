
function factorial(arg){
   let result = 1;
   if(typeof arg !== "number")
       return "Arg must be number"
    else
   {
       if(arg === 0)
           return 1
       else if(arg < 0)
           return "Arg must be > or = to 0"
       else {
           for(let i = 1 ; i <= arg; i++)
               result *= i;
       }
   }
    return result
}

console.log(factorial(-5))
console.log(factorial(5))
console.log(factorial(0))
console.log(factorial("test"))


