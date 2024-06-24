const accountId = 144553
let accountEmail = "mrinmoy@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
accountEmail = "mr@mr.com"
accountPassword = "21212121"
accountCity = "Hyderabad"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
