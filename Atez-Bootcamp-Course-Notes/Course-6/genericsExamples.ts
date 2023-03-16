function takeAJobAndReturn<J>(job: J): J {

  return job;
}

const message1:string  = takeAJobAndReturn('Hello World');
const message2: number = takeAJobAndReturn(123);

function createAnArrayFromAnArray<A>(items: A[]): A[] {
    //createAnArrayFromAnArray([1,2,3,4,5])
     return new Array<A>().concat(items);
}

let numberArray = createAnArrayFromAnArray([200,300,400]);
let strArray = createAnArrayFromAnArray(['Hello', 'World']);

numberArray.push(500);
strArray.push('hello', 'world');

function getUserInfo<U,I>(id : U, name: I): void {
    console.log(`User Id: ${id}, User Name: ${name}`);
}

getUserInfo<number, string>(1, 'John');

//Bir fonksiyona birden fazla generic tip tanımlayabiliriz.
// Generic tipler tek tik generic tip gibi gerçekleştirdiği veya çalıştığı durumda aldığı değerden başka bir değer alamaz.
// Başka bir durumda tekrar çalıştırıldığında farklı tipler alabilirler


class GenericNumber<T>{
    staringPoint:T
    add:(x:T,y:T)=>T
}

let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.staringPoint = 'Hello World'; // Error
myGenericNumber.staringPoint = 0; // OK
//createGenericNumber.add = ('Hello', 'World'); // Error
myGenericNumber.add = (x, y) => x + y; // OK


interface IShoppingHistory {
}

interface IUsers {
    email:string
    name:string
    id:number | string
    isVerified:boolean
    shoppingHistory:IShoppingHistory

}

interface Collection<T> {
    add:(x:T)=>void
    remove:(x:T)=>void
    returnArray:()=>T[]
}
// Kalitim aldiğimiz interface içerisinde generic bir tip varsa ve bu bir harf ile isimlendirişmişse başka
// bir instance içerisinde kullanılacağı zaman verilecek olan generic tipi belirten harfin farklı olmasının bir önemi yoktur.
// tipin gelecek olan değerini etkilemez.
class Basket<U> implements Collection<U>{
private data: U[] = []

    add(x: U): void {
        this.data.push(x)
    }
    remove(y: U): void {
        let index = this.data.indexOf(y)
        if(index > -1) this.data.splice(index,1)
    }

    returnArray(): U[] {
        return this.data
    }
}

let numbers:Collection<number> = new Basket<number>()

numbers.add(1)
numbers.add(2)
numbers.add(3)
numbers.remove(2)

let result = numbers.returnArray()
console.log(result)


class Customer {
    firstName:string
    lastName:string

    constructor(firstName:string, lastName:string) {
        this.firstName = firstName
        this.lastName = lastName
    }

}

class FirstCustomer extends Customer {
   id:number
    constructor(id:number, firstName:string, lastName:string) {
        super(firstName, lastName)
        this.id = id
    }
}
function logCustomers<T extends Customer>(person:T):void {
    console.log( 'Customer Name: ' + person.firstName + ' ' + person.lastName)

}

let customer = new Customer('John', 'Doe')

logCustomers(customer)

//Eğer bir generic tip bir class veya interfaceden kalıtım (extends || implements) alıyorsa
// o tipe atanabilecek her tip aynı class veya interfaceden kalıtım almalıdır.
// yani yukaridaki örnekteki gibi Customer veya FirstCustomer tipi bir veri alabilirken string veya number gibi bir veri alamaz.

interface  Pair<T, U>  {
 first: T;
 second: U;
}

let value: Pair<number, string> = { first: 1, second: "hello" };

let anotherValue: Pair<string, number> = { first: "hello", second: 1 };

interface Command <T,R> {
    jobId: T;
    run(value:T): R
}
