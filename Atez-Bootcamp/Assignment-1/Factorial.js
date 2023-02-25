
function factorial(arg){
   let result = 1;
   if(typeof arg === "string")
       console.log("Arg cannot be string")
    for(let i = 1 ; i <= arg; i++)
    {
        result *= i;
    }
    return result
}


console.log(factorial(5))
