// var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner", a);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log("Outer",a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Mrinmoy"
    
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// +++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++

console.log(addone(5));

function addone(num){
    return num + 1
}


// Expression
const addTwo = function(num){
    return num + 2
}
addTwo(5)
