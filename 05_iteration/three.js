// for of

// ["", "", ""]
// [{}, {}, {}]


const arr = [1, 2, 3, 4, 5]

// for (const element of object) {

// }

for (const num of arr) {    
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}


// Map :- Store unique keys and values

const map = new Map()
map.set("name", "dhruv")
map.set("age", 22)

console.log(map);

for(const [key, value] of map)
{
    console.log(key, ':- ', value);
}


// object 
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// Object is not iterable using for of loop

// for (const [key, value] of myObject) {   
//     console.log(key, ':-', value);
// }