const marvel = ["ironman", "thor", "spiderman"]

const dc = ["superman", "flash", "batman"]

// marvel.push(dc)

// console.log(marvel);
// console.log(marvel[3]); // print dc array element

// console.log(marvel[3][2]);  // print batman

const val = marvel.concat(dc)  // concat method return new array so we have to store that array in val variable
console.log(val);

// spread method :- it spread the item of array together
const allHero = [...marvel, ...dc]
console.log(allHero);


const a = [1,2,3, [4,5,6], 7, [5,6, [6,6,6]]]

// flat method merged all nested array all together at one place
const realArray = a.flat(Infinity)

console.log(realArray);


console.log(Array.isArray("dhruv")); // false

console.log(Array.from("dhruv")); // convert into character array

console.log(Array.from({name: "dhruv" })); // gives empty object [] and tells that it cannot convert it into array

let n1 = 100
let n2 = 200
let n3 = 300

// this will convert all variable or whatever you passed in this method, it convert into array
console.log(Array.of(n1, n2, n3));