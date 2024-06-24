let score = "Mrinmoy"
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof (valueInNumber));
// console.log(valueInNumber);

/* 
"33" => 33
"33abc" => NaN
true => 1; false => 0
*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

/*
1 => true; 0 => false;
"" => false
"Mrinmoy" => true 
*/

// ****************** Operations ******************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log("Sum: ", 2 + 2);
// console.log("Substraction: ", 2 - 2);
// console.log("Multiplication: ", 2 * 2);
// console.log("Power: ", 2 ** 3);
// console.log("Division: ", 2 / 3);
// console.log("Reminder: ", 2 % 3);

// let str1 = "Hello"
// let str2 = " Mrinmoy"

// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log(3 + 4 * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100 
// gameCounter++
++gameCounter
console.log(gameCounter);

// prefix or postfix examples
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment