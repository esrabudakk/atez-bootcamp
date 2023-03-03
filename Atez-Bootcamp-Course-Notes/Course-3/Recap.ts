interface Animal{
    name:string,
    type : string,
    age : number,
    sound : () => void;
}

interface  Cat extends Animal{
    dot:string,

}

/* Enums */
enum   Months {
    January,
    February,
    March,
}
const myCat: Cat = {
    dot:'Spotted',
    sound: () => console.log("Meow"),
    name: 'Java',
    type: 'tekir',
    age : 3,
}

const  Java = {
    birthMonth: Months.February
}

console.log(Java.birthMonth)

/* Generics */

