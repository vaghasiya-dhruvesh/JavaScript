const accountId = 12345
let accountEmail = "dhruveshpatel2005@gmail.com"
var accountPassword = "123456"
accountCity = "Jetpur"  // Not recommeded

let accountState;   // undefined variable

console.log(accountId);

/* 
Do not use var keyword to declare the variable
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
