const name = "dhruv"
const repo = 10

console.log(name + repo + "value");  // old way to concateneted string

// Modern way used Backticks (``) where String Interpulation concept came
// here we make placeholder where we can injured any variable
console.log(`hello my name is ${name} and my repo count is ${repo}`);

// 2 ways to declare the string
const str = "dhruv"
const str2 = new String("dhruv")    

console.log(str2[0]); // print d
console.log(str2.length);   // print 5
console.log(str.length);   // print 5

console.log(str.toUpperCase()); // it did not change the original string
console.log(str);
console.log(str.indexOf('d'));  // 0

const st = str.substring(0,2)
console.log(st);    // dh

const s = str.slice(-3, 0)
console.log(s);     // dh

const url = "www.dhruvesh%20patel.com"
console.log(url.replace('%20', '-'));

