// truty values

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt, 0n, "", undefined, null, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}, Symbol(), -1, Infinity, -0n, 0n

if (userEmail.length === 0) {
    console.log("Array is empty");
}
    
const emptyObj = {}
    
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1); // display 5 if null or undefined does not exist

val1 = null ?? 10
console.log(val1);  // display 10 if null exists

val1 = undefined ?? 15
console.log(val1);  // display 15 if undefined exists

val1 = null ?? 10 ?? 20
console.log(val1);  // display first value 10 if null exists 


// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")