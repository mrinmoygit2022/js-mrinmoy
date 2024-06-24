// Type of object declaration - literal, Constructor, Singleton
// object literals
// Object.create => constructor through make singleton

// Symbol declares
const mySymbol = Symbol("Key1")

const JsUser = {
    name: "Mrinmoy", 
    "full name": "Mrinmoy Roy",
    [mySymbol]: "myKey1",
    age: 37,
    location: "Barasat",
    email: "mrinmoy@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySymbol]);

JsUser.email = "mrinmoy@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "mrinmoy@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());