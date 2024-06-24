// array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
const myArray = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "naagraj"]
const myArray2 = new Array(1, 2, 3, 4)
// console.log(`Array Call: ${myArray[1]}`);

// Array Methods
// myArray.push(6) // Add value within array on last side
// myArray.push(7)
// myArray.pop() // Delete value within array on last side
// myArray.unshift(9) // Add value within array on first side
// myArray.shift() // Delete value within array on first side
// console.log(`include methods in array: ${myArray.includes(9)}`);
// console.log(`indexof methods in array: ${myArray.indexOf(3)}`);
// console.log(`myArray push method: ${myArray}`);

const newArray = myArray.join()

console.log(`myArray: ${typeof myArray}`);
console.log(`newArray: ${typeof newArray}`);
console.log(newArray);

// slice, splice
// console.log(`A: ${myArray}`);
// const myn1 = myArray.slice(1, 3)
// console.log(`Slice Value is: ${myn1}`);
// console.log(`B: ${myArray}`);

// const myn2 = myArray.splice(1, 3)
// console.log(`C: ${myArray}`);
// console.log(`Splice Value is: ${myn2}`);
