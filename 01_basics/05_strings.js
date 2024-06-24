const sname = "Mrinmoy"
const repoCount = 50

// console.log(sname + repoCount + " Value");
console.log(`Hello! My name is ${sname.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')


// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "     Mrinmoy       "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://hitesh.com/mrinmoy%20Roy"

console.log(url.replace('%20', '-'));
console.log(url.includes('mrinmoy'));
console.log(gameName.split("-"));