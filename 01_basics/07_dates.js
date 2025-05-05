let myDate = new Date()
console.log(myDate);

console.log(myDate.toString()); // Mon May 05 2025 05:16:07 GMT+0000
console.log(myDate.toDateString()); // Mon May 05 2025
console.log(myDate.toLocaleDateString());  // 5/5/2025
console.log(myDate.toISOString());  // 2025-05-05 T05:16:07.683Z

console.log(typeof myDate);     // object

let myCreateDate = new Date(2023, 0, 23)
console.log(myCreateDate.toDateString()); // Mon Jan 23 2023


let myCreateDate2 = new Date("2025-01-01")
console.log(myCreateDate2.toDateString()); // Web Jan 12 2025

let myCreateDate3 = new Date("01-08-2024")
console.log(myCreateDate3.toDateString()); // Mon Jan 08 2024

let myTimeStamp = Date.now()
console.log(myTimeStamp);  // gives 1746422529041 milliseconds

console.log(myCreateDate2.getTime());  // gives 1735689600000 milliseconds

console.log(Math.floor(myCreateDate2.getTime()/1000));  // gives 1735689600 seconds

let newDate = new Date()
console.log(newDate.getMonth() + 1);    // 5 
console.log(newDate.getDay());    // 1

// we can advanced customize the date
let val = newDate.toLocaleString('default', {
    weekday: "long"
})

console.log(val);  // Monday
