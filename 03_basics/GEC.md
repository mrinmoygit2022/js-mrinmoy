Javascript executional context
Global Executional Context are two types, 
1. Global Executional Context, 
2. Functional Executional Context,
3. Eval Executional Context (For Mongos)

a. Memory Creation Phase:
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

Steps: First Cycle
1. Global Execution store under this 
2. Memory Creation Phase
val1 = undefined
val2 = undefined
addNum = defination
result1 = undefined
result2 = undefined

Step 2:
b. Exection Phase
val1 = 10
val2 = 5
addNew => here execution phase not working, create a another own executional phase (New executional context),
New variable environment + Execution Thread
Result = 15
i. Memory Phase
val1 = undefined
val2 = undefined
total = undefined

ii. Execution Phase
val1 = 10
val2 = 5
total = 15
This value is return into Global Executional Context

<!-- Chaiaurcode.js -->
function one(){
    console.log("one")
    two()
}
function two(){
    console.log("two")
    three()
}
function three(){
    console.log("three")
}
one()
two()
three()

call stacks