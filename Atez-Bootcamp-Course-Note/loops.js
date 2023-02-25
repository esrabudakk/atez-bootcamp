
function functionScope(){
    const testArr = [ "ATEZ", "Some value", 42, "abc"]

    for(let i = 0; i < testArr.length; i++){
        if(typeof  testArr[i] ===  "number")
            console.log("value from loop", testArr[i])
    }
}

functionScope()
console.log("****************************************")
function functionScope2(){
    const testArr = [ "ATEZ", "Some value", 42, "abc"]
    let age = 30;
    while (age < 37){
        age = age + 1;
        console.log("deger arttır", age)
        age++;
    }
}
functionScope2()

const person = [
    {name: "esra", surname : "budak", age : 22},
    {name: "esra", surname : "budak", age : 21},
    {name: "esra", surname : "budak", age : 23},
]

//foreach, map, filter

const carArray = [];
const carModels = ["adana", "toronto", "ford", "mondeo"];

carModels.forEach((x,index) => {
    const  carObject = {
        id: index,
        model: x
    };

    carArray.push(carObject);
});
console.log('Carray', carArray)

//map

const carModels2 = carModels.map((value, index) =>{
    //TODO:buraya bak
    return {
        id:index,
        mode:value
    };
});
console.log('CarModels', carModels2)


const hasinSale = [
    { id: 0, mode: 'adana' , inSale:true},
    { id: 1, mode: 'toronto' , inSale:false},
    { id: 2, mode: 'ford',inSale:false },
    { id: 3, mode: 'mondeo' ,inSale:true},
    { id: 4, mode: 'küheylan' ,inSale:true}

]
// filter
const inSaleCars = hasinSale.filter(x => x.inSale === true);
console.log("Insale", inSaleCars)

const inSaleCars2 = hasinSale.filter(x => !x.inSale === true);
console.log("Insale", inSaleCars2)

const inSaleCars3 = hasinSale.filter(x => x.inSale === true && x.mode === "küheylan");
console.log("Insale", inSaleCars3)

//find
console.log("*************find***************")

const inSaleCars4 = hasinSale.find(x => x.inSale);
console.log("Insale", inSaleCars4)

const inSaleCars5 = hasinSale.find(x => x.id > 1);
console.log("id", inSaleCars5)

