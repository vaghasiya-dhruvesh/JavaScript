const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // here we fixed number like 10.00

const num = 1123.8966
console.log(num.toPrecision(4));

const n = 1000000
console.log(n.toLocaleString('en-IN'));    // gives 10,00,000 as per Indian Standard

// ************************** Maths *******************************

console.log(Math);      // object
console.log(Math.abs(-4));  // 4 gives only positive value
console.log(Math.round(4.3)); // 4 round off 
console.log(Math.ceil(4.2));   // 5 top value
console.log(Math.floor(4.9));  // 4 down value
console.log(Math.sqrt(4));   // 2
console.log(Math.pow(2, 4));    // 16
console.log(Math.min(-4, 2, 6, -5, 9));  // -5
console.log(Math.max(-4, 2, 6, -5, 9));  // 9

// we used mostly
console.log(Math.random());  // it gives value between 0 and 1
console.log(Math.random()*10 + 1);  

const min = 10
const max = 20
// this give value between 10 and 20
console.log(Math.floor( Math.random() * (max-min+1)) + min);