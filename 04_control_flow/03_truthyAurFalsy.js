const userEmail = "m@google.ai"

if (userEmail) {
    console.log("Got your email");
}else{
    console.log("Don't have user email");
}

// falsy value
/* false, 0, -0, BigInt 0n, "", null, undefined, NaN */

// truthy value
/* "0", 'false', " ", [], {}, function(){} */ 

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }
// implicit scope (write any conditional checking within same line)
// if (condition) console.log("implicit scope");

// Nullish Coalescing operator (??): null undefined

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20 // to show the first value

// console.log(val1);

// Terniary Operator

condition ? true : false
const iceTeaPrice = 100 
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")