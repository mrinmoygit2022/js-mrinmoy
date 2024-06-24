// const array1 = [1, 2, 3, 4]

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0
// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue, initialValue
// );

// console.log(`Expeceted Value is: ${sumWithInitial}`);

const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function (accumulator, currentValue){
//     console.log(`accumulator ${accumulator} and currentValue ${currentValue}`);
//     return accumulator + currentValue
// }, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(`Total card value is: ${priceToPay}`);