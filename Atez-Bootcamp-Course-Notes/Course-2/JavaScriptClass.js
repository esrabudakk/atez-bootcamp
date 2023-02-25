class Dersler {
    constructor(name, teacher) {
        this.name = name
        this.teacher = teacher
    }
    getName(){
        return this.name
    }
    setName(newName)
    {
        this.name = newName
    }
    getClassNameWTeacher(){
        if(this.name && this.teacher)
        {
            // return this.name +" dersinin ögretmeni: "+this.teacher
            return `${this.name} dersinin ögretmeni: ${this.teacher}`
        }
        else
            return "Öğretmen ve isim yok"

    }
}

const math  = new Dersler("matematik", "Umut")
console.log("math object: ", math)
console.log("math object: ", math.getClassNameWTeacher())

class Animal {
    constructor(name) {
        this.name = name
    }
    speak(){
        return `${this.name} make sounds`
    }
}

class Dog extends  Animal{
    constructor(name) {
        super(name);
    }
    bark(){
        return this.name + " barks"
    }
}
class Cat extends  Animal{
    constructor(name) {
        super(name);
    }

    scratch(){
        return this.name + " scratched"
    }
}

const goldenRetriever = new Dog("Eddie")
console.log("Dog object ", goldenRetriever.bark())

const iranCat = new Cat("Belos")
console.log("Cat object ", iranCat.scratch())
console.log("Cat object ", iranCat.speak())
