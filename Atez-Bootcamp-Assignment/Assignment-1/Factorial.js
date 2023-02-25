
function factorial(arg){
   let result = 1;
   let returnCheck = 0;
   if(typeof arg === "string")
   {
       returnCheck = 1;
       return "Arg cannot be string"
   }
    else
   {
       for(let i = 1 ; i <= arg; i++)
       {
           result *= i;
       }
   }
    if(returnCheck)
        return "Arg cannot be string";
    return result
}


console.log(factorial("d"))
