// for
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5) {
        // console.log("5 is best number.");
    }
    // console.log(element);
}

// for (let i = 1; i < 5; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j < 5; j++) {
//         // console.log(`inner loop value: ${j} outer loop value: ${i}`);
//         console.log(i + '*' + j + ' = ' + i*j);
//     }
    
// }

// function printStarTriangle(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let starRow = '';
//         for (let j = 1; j <= i; j++) {
//             starRow += '*';
//         }
//         console.log(starRow);
//     }
// }

// // Example usage:
// printStarTriangle(5);

// let myArray = ["flash", "Batman", "Superman"]
// console.log(`myArray: ${myArray.length}`);
//     j=1
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(`${j}. ${element.toUpperCase()}`);
//     j++ 
// }

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected ${index}`);
//         break
//     }
//     const element = index;
//     console.log(`Value of index is ${element}`);
// }
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected ${index}`);
        continue
    }
    const element = index;
    console.log(`Value of index is ${element}`);
}