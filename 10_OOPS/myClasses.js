// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const dhruv = new User("dhruv", "dhruvpatel@gmail.com", "123")

console.log(dhruv.encryptPassword());
console.log(dhruv.changeUsername());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const devil = new User("devil", "devil@gmail.com", "123")

console.log(devil.encryptPassword());
console.log(devil.changeUsername());