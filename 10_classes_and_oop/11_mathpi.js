
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI);

// const mynewObject = Object.create(null)
// console.log("mynewObject", mynewObject);

const chai = {
    name: 'Ginger Chai',
    price: 250,
    isAvilable: true,

    orderChai: function(){
        console.log("Chai is not being made.");
    }
}



Object.defineProperty(chai, 'name', {
    writable: true,
    enumerable: true,
    configurable: true
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// chai.name = "Tea"
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {            
        console.log(`${key} : ${value}`);
    }
}