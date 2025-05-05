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

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);      // Give false

// BigInt

const val = 2222222222222222222222222222222222222222222222222n // <- we have to insert n in the last to defined as BigInt
console.log(typeof val);    // gives BigInt 


const bigInteger = 22323454645657567453453453453546456429292929929292929929292992992
console.log(typeof bigInteger); // gives number  



// ****************************  Memory  ********************************

// Stack Memory (Primitive Data type)  vs  Heap Memory (Non Primitive)

let name1 = "dhruvesh"

let anothername = name1
anothername = "dhruv"

console.log(name1);
console.log(anothername);     // stack memory give copy of original data


// heap memory

let user = {
    email: "druveshpatel2005@gmail.com",
    age: 20
}

console.log(user);  

let user2 = user    // gives reference of the original data
user2.email = "dhruvpatel@google.com"   

console.log(user);  // give dhruvpatel@google.com
console.log(user2); // give dhruvpatel@google.com