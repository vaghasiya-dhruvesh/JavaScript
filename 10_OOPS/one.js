const user1 = {
    username: "dhruv",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("got user data from database");
        console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}

// console.log(user);
console.log(user1.username); // dhruv
console.log(user1.getUserDetails());
console.log(this); // gives {}

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this  <- It is implicitly exists in the function
}

// const userOne = User("hitesh", 12, true)  // without new keyword, it does not create any object
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
// console.log(userOne.constructor);   // gives [Function: User]
console.log(userOne);

// New Keyword:- 
// 1. It create a empty object  
// 2. It called constructor function  
// 3. Argument are inject using this keyword   
// 4. You get the result