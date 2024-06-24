// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Through the map, we can both retrieve and inject values. However, with the filter, we can only retrieve values, not inject them.
// const newNums = myNums.map( (num) => {return num})
// const newNums = myNums.filter( (num) => {return num + 10})

// Using foreach
// const newArray = []

// myNums.forEach((num) => {
//     if (num) {
//         newArray.push(num + 10);
//     }
// });
// console.log(newArray);

// Chaining - apply multiple syntex in a line 
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNumbers
                .map((num) => num * 10)
                .map((num)=> num + 1)
                .filter((num)=> num >= 40)

console.log(newNums);

