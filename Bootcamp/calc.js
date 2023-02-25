
const number1 = 5;
const number2 = 10;

const addNumber = (a,b, c) => {
    return a + b + c;
}
// const addNumber = (a,b) => {
//     return a + b ;
// }
console.log(number1 - number2)
console.log(number1 / number2)

console.log('Tricky', number1/number2 + number2)
console.log(number1 / 0)
console.log(0 / "sdasd")

for(let i = 0; i <= 10; i++)
{
    console.log('Cift sayi', i, i%2)
}

const x =true;
const y = null;
const z = {
    name: "Umut",
    surname: "Bdfd",
    age: 23,
}

if(x){
    console.log('x degeri buraya', x);
}
if(y){
    console.log("y degeri girdi", y);
}
if(z){
    console.log("z degeri gg", z);
}

let expectd = 0;

if(expectd >= 0 && expectd < 4 )
{
    console.log("Expected", expectd)
    expectd = expectd + 1;
}
else if(expectd < 9)
    console.log("middle expect", expectd)
else
    console.log('ben 10um', expectd)