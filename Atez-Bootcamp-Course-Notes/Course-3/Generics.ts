//
// type Animal = {
//     type: string,
//     age: number,
//     sound: (param: any) => void,
// }
//
// type  Sound = {
//     soundType: string,
// }
//
//
// function  createAnimalSound(snd: any){
//     snd.sound(sd.soundType)
//     return  `my sound is ${snd}`
// }
//
// const sd: Sound = {
//     soundType : 'Meow'
// }

type  Job = {
    name:string,
    state: string,
    start : () => void,
}
type JobRun<T extends  Job> = {
    job:any,
    state:string,
    onComplete: (callback: (job:any) => void) => void,
}

type SendEmail = Job & { // extendin diğer yolu
    recipientEmail : string,
    subject: string,
}

function enqueueJob <T extends  Job> (job: any) : JobRun <T>{
    //logic
    return {
        job,
        state : 'que',
        onComplete: (cb: (job:any) => void) => cb(job),
    }
}

const j : SendEmail = {
    recipientEmail: 'aasd@ads.com',
    subject : 'dfdsf',
    state: 'started',
    name : 'email',
    start : () => console.log("started")
}

const run = enqueueJob(j)

run.onComplete(job => {
    job
})


/**************************************************/

interface  NameGenerator {
    name?:string,
    surName?:string,
    generate?:string,
}

class  Generator implements NameGenerator{
    name:"Hakan"
    surName : "Kolcu"
    generate(){
        return`${this.name} ${this.surName}`
    }
    test (){

    }
}

class Animal {
    name:string;
    type:string;
    constructor(name:string, type:string) {
        this.name = name;
        this.type = type;
    }

}

//model