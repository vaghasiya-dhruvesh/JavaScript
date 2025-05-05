// singleton :- when we make object through constructor then it will make singleton object
// Ex:-   Object.create


// object literals :- way to declare object

const sym = Symbol("key1")

const jsUser = {
    name: "dhruv",
    age: 20,
    [sym]: "mykey1",        // here we refer upper declared symbol
    location: "Jetpur",
    email: "dhruveshpatel2005@gmail.com",
    isLoggedIn: false,
    lastLogin: ["Monday", "saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser[sym]);
console.log(typeof jsUser[sym]);

// how to change the object
jsUser.email = "dhruv@gmail.com"
// Object.freeze(jsUser)   // this method freeze the object and don't allow anyone to edit the data
jsUser.email = "dhruv123@gmail.com"
console.log(jsUser);

// function
jsUser.greeting = function(){
    console.log("hello users");
}

console.log(jsUser.greeting());  // get undefined 

jsUser.greetingTwo = function(){
    console.log(`hello users, ${this.name}`);
}

console.log(jsUser.greetingTwo());
