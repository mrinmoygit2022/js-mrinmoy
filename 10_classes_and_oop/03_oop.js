const user = {
    username: "Mrinmoy",
    loginCount: 8, 
    signedId: true,

    getUserDetails: function(){
        // console.log("Got user details from database.");
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}

// Correct way to access properties
// console.log(user.username); // Output: Mrinmoy
// Alternatively, using bracket notation
// console.log(user["username"]); // Output: Mrinmoy
// Call the function of object
// console.log(user.getUserDetails());
// Print global context
// console.log(this); // {}

const promiseOne = new Promise(function(resolve, reject){});
const date = new Date();

console.log(date.toLocaleTimeString());

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Mrinmoy", 12, true)
const userTwo = new User("Chaiaurcode", 11, false)

console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo);