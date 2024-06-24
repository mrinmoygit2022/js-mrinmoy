// functions

function sayMyName(){
    console.log("M");
    console.log("R");
    console.log("I");
    console.log("N");
    console.log("M");
    console.log("O");
    console.log("Y");
}

// sayMyName //function reference
// sayMyName() // Function Execution

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result  
    return number1 + number2;
}

// const result = addTwoNumbers(3,4)
// console.log("Result: ", result);

function loginUserMessage(username = "bydefault"){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage());

// Rest operator
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user ={
    username: "Mrinmoy",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "hitesh",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));