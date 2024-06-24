// Primitive (Call by value)
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined

const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id === anotherId);

const bigNumber = 3456543576654356754n

// Reference (Non primitive)
// Array, Objects, functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name : "Mrinmoy",
    age : 22
}

const myFunction = function(){
    console.log("Hello World");
}
myFunction();
// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive) => If you declare any stack value you received a copy, if you create any changes original value not make any changes., 
// Heap (Non-Primitive)=> If you declare any heap value you received a reference, if you create any changes original value should be changes. 


let myYoutubeName = "Mrinmoy Roy"
let anotherName =  myYoutubeName
anotherName = "ChaiAurCode"

console.log("anotherName", anotherName);
console.log("myYoutubeName", myYoutubeName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "mrinmoy@google.com"

console.log("userOne", userOne.email);
console.log("userTwo", userTwo.email);