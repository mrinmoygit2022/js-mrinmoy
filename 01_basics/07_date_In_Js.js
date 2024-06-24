// Dates
let myDate = new Date()
console.log(`toString: ${myDate.toString()}`);
console.log(`toDateString: ${myDate.toDateString()}`);
console.log(`toDateString: ${myDate.toLocaleString()}`);
console.log(`typeof: ${typeof myDate}`);

// let myCreateDate = new Date(2023, 0, 23)
// console.log(`Custom date ${myCreateDate}`);
// let myCreateDate = new Date(2023, 0, 23, 5, 3)
// console.log(`To shows date and time: ${myCreateDate.toLocaleString()}`);
// let myCreateDate = new Date("2023-01-16")
let myCreateDate = new Date("01-16-2023")
// console.log(`To show the custom date: ${myCreateDate.toLocaleString()}`);

// let myTimeStamp = Date.now()
// console.log(`getTime: ${myCreateDate.getTime()}`);
// console.log(`Current Time: ${myTimeStamp}`);
console.log(`Second Calculate: ${Math.floor(Date.now()/1000)}`);
let newDate = new Date()
console.log(`Currnet Date: ${newDate}`);
console.log(`Currnet Month: ${(newDate.getMonth()) + 1}`);
console.log(`Current Date: ${newDate.getDate()}`);
console.log(`Current Day: ${newDate.getDay()}`);
newDate.toLocaleString(`Default`, {
    weekday: "long"
})