const tinderUser = new Object() // singleton object

// const tinderUser = {}  <-- Non singleton object

tinderUser.id = "123abc"
tinderUser.name = "dhruv"
tinderUser.isLoggedIn = false

// console.log(tinderUser);   

// nested object creation
const regularUser = {
    email: "dhruv@gmail.com",
    fullname: {
        userFullName: {
            firstName: "dhruv",
            lastName: "Vaghasiya"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userFullName.firstName);

// if fullname doesn't exist, to handle this type of situation we can add ? 

// console.log(regularUser.fullname?.userFullName.firstName);

// ? also get rid from extra if else statement


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3);  // this will give same problem of nested array

const obj3 = Object.assign(obj1, obj2) // here we combine all nested object togather into one single object 
console.log(obj3);
console.log(obj1);  // Note: obj1 also changed means all nested object are merged with obj1


// using spread operation --- Mostly we used this syntax
const obj = {...obj1, ...obj2, ...obj3}
console.log(obj);


// Very Important concept
// we can extract all keys of the object and used it anywhere

console.log(Object.keys(tinderUser));   // print key
console.log(Object.values(tinderUser)); // print values

console.log(Object.entries(tinderUser)); // convert each key value entry into a individual array


// to check whether a particular key is exist or not in the object before used it, we used hasOwnProperty() method

console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // print true or false

const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "dhruv"
}

// old way to access data
// course.courseInstructor

// new way to access data
// const {courseInstructor} = course    <--- We can modified variable name
const {courseInstructor: instruct} = course // here we modified variable

// console.log(courseInstructor);
console.log(instruct);

// const navbar = ({company}) => {  <- Here we destructuring the object

// }

// navbar(company = "google")

// json  -- Not object because object has name
// {
//     "name": "dhruv"
//     "course": "javascript"
//     "price": "free"
// }

