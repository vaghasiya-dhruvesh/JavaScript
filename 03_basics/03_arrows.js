const user = {
    username: "dhruv",
    age: 20,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to India`);
        console.log(this);  // this display current context this keyword refer to.
        
    }
}

console.log(this);      // gives empty object {}

user.welcomeMessage()   // print dhruv
user.username = "dhruvesh"  // here we changed the context
user.welcomeMessage()   // print dhruvesh because context is changed


// this keyword only refer context inside the object. 
// but when we define this keyword inside the function then we are not able to refer any context.

function demo(){
    let username = "dhruv"
    console.log(this);
}

// demo()

// arrow function :-  const one = () => {}

const one = (num1, num2) => {
    console.log(num1+num2);
}

// we can also return value like this...   Without using return keyword
const two = (num1, num2) => (num1 + num2)

const three = () => {this.username} // if we return object like this then it return undefined

const four = () => ({username: "dhruv"}) // we have to wrap up object inside paranthesis

// console.log(two(3,4));

console.log(four());

const arr = [1,2,2,2,3]

// arr.forEach( () => ())