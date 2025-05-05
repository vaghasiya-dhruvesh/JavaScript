let score = "33abc"
let score1 = null
let score2 = undefined

console.log(typeof score);

let valueInNumber = Number(score)
let value1 = Number(score1)
let value2 = Number(score2)

console.log(typeof valueInNumber);
console.log(typeof value1);
console.log(typeof value2);
console.log(valueInNumber);     // give output NaN (Not a Number)
console.log(value1);
console.log(value2);        // give output NaN

let isLoggedIn = 1

let booleanValue = Boolean(isLoggedIn)
console.log(booleanValue)       // give true

// 1 => true && 0 => false
// "" => false
// "Dhruv" => true

let num = 33

let stringNum = String(num)
console.log(stringNum)
console.log(typeof stringNum)

// ***************************Operation*********************************

let val = 3
let negValue = -val
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/3);
console.log(2%1);

let s1 = "dhruv"
let s2 = "patel"
let s3 = s1+s2
console.log(s3);

console.log("1" + 2);       // 12
console.log(1 + "2");       // 12
console.log("1" + "2");     // 12
console.log("1" + 2 + 2);   // 122
console.log(2 + 2 + "1");   // 32

console.log(1+true);  // give 2  =>  1+1    // not prefer
console.log(+"");       // give 0

let n1, n2, n3

n1 = n2 = n3 = 6  // not prefer

let count = 100
count++;        // give 101
++count         // give 102