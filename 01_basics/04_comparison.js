console.log(2>1);  // give true
console.log(2>=1);

console.log("2" > 1);   // javascript automatically convert "2" into number

// typescript don't allow to compare two different data type

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0);  // true    

// Comparison operator treat null value = 0 so it gives true when >= 0

// comparison operator =>    >, <, >=, <=
// Equality operator =>  ==

// both operator work differently


// Strict check
console.log( "2" === 2);    // false
console.log("2" == 2);      // true

