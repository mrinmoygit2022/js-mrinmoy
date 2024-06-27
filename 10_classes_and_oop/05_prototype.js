let myName = "Mrinmoy    "
let myChannel = "Chai    "

// console.log(`My name length: ${myName.trim().length}`);
console.log(`My name length: ${myName.trueLength}`);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is: ${this.spiderman}`);
    }
}

Object.prototype.mrinmoy = function(){
    console.log(`Mrinmoy is present in all object.`);
}

Array.prototype.heyMrinmoy = function(){
    console.log(`Mrinmoy is present in all Array.`);
}

// heroPower.mrinmoy()
myHeros.mrinmoy()

// heroPower.heyMrinmoy()
myHeros.heyMrinmoy()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignment: 'JS assignment', 
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Mrinmoy".trueLength()
"iceTea".trueLength()