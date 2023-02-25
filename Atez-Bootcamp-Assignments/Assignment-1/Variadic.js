
function variadic(...numbers){
    let result = 1;
    let numberCheck = 0;
    numbers.forEach((value) => {
        if(typeof value === "number")
        {
            result *= value;
        }
        else
        {
            numberCheck = 1;
            return "Please enter correct value";
        }

    })
    if(numberCheck)
        return "Please enter correct value";
    return result;
}


console.log(variadic(5,"d",7))