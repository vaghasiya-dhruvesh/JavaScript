class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const dhruvesh = new Teacher("dhruv", "dhruv@teacher.com", "123")

dhruvesh.logMe()
const devi = new User("devil")

devi.logMe()

console.log(dhruvesh instanceof User);  // it give true