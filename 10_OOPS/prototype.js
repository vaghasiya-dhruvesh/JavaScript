// let myName = "dhruv     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.dhruv = function(){
    console.log(`dhruv is present in all objects`);
}

Array.prototype.heyDhruv = function(){
    console.log(`dhruvesh says hello`);
}

// heroPower.dhruv()
// myHeros.dhruv()
// myHeros.heyDhruv()
// heroPower.heyDhruv()

// inheritance

const User = {
    name: "dhruv",
    email: "dhruv@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "dhruvesh     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"dhruv".trueLength()
"iceTea".trueLength()