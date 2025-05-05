"use strict";  // treat all JS code as newer version

let name = "dhruv"
let age = 20
let isLoggedIn = false

// number has range 2^53
// bigint
// string => ""
// boolean => true/false
// null <- It is a stand alone value
// undefined => value is not assigned
// symbol => used for unique   

// object

console.log(typeof "Dhruv"); // give string as output
console.log(typeof null);   // give object as output -- so NULL is an Object

console.log(typeof undefined);  // give undefined as output

// Primitive datatype

// 7 types :- String, Number, Boolean, null, undefined, Symbol, BigInt


// Reference Type (Non Primitive)

// 3 types :- Arrays, Objects, Functions

// array
const heros = ["ironman", "captain america", "spiderman"]

console.log(heros);

// object
let obj = {
    name:"dhruv",
    age:20
}

console.log(obj);

// function

const myFun = function(){
    console.log("Hello world");
    
}

console.log(myFun);
console.log(typeof myFun);      // give function
console.log(typeof dhfa);       // give undefined

