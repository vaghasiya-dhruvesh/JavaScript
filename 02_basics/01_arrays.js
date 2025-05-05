// declare array

const array = [0, 1,2,3, 4, true, "dhruv"]

const arr = [0,1,2,3,4]
console.log(arr);

const arr2 = new Array(1,2,3,4);
console.log(arr2[2]);

// array method

arr2.push(5);
arr2.pop();  // remove last value

console.log(arr2);

arr2.unshift(18)  // it add 18 at starting of the array

console.log(arr2);  // [ 18, 1, 2, 3, 4 ]

arr2.shift()    // it will remove first element of the array

console.log(arr2);

console.log(arr2.includes(29));  // false

console.log(arr2.indexOf(29));  // -1

const newArr = arr2.join()  // join function convert array into string 

console.log(arr2);  // array object
console.log(newArr); // string type

// slice and splice
console.log("A", arr2);

const myArr2 = arr2.slice(1,3)  // slice only takes elements of index 1,2 and very important difference between slice and splice is that 

// slice can not change the original array
console.log(arr2);
console.log(myArr2);

const myArr3 = arr2.splice(1,3) // splice takes element of index 1,2,3 

// and splice change the original array arr2 by remove element of specified index
console.log(arr2);
console.log(myArr3); 

