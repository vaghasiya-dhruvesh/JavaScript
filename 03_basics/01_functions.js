// const fs = require('fs');
// const contents1 = fs.readFileSync('a.txt', 'UTF-8');     <-- Synchronous operation
// const contents1 = fs.readFile('a.txt', 'UTF-8');         <-- Asynchronous operation
// console.log(contents1);



// Bellow code also perform asynchronous operation
function timeout(){
    console.log("hello world");
}

console.log("hii there");

setTimeout(timeout, 3000);         // IO Bound / IO Intensive Task


for(i=0; i<30000000; i++){           // CPU Intensive Task
    let c = 1;
    c = i+1;
}

console.log("Welcome to javaScript");           // First CPU Intensive task will execute even if takes too much time to run