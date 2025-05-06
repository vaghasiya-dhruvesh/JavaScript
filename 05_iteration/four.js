const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for in loop  :- used to iterate over the properties of an object
for (const key in myObject) {
    console.log(key);       // print all keys
    console.log(myObject[key]); // print all values
}

for (const key in myObject) {
    console.log(`${key} = ${myObject[key]}`);   // print all keys and values
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {    // work for array too
    console.log(key);       // print all keys or index like 0, 1, 2, 3, 4
    console.log(programming[key]); // print all values
}