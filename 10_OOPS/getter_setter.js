class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}dhruv`
    }

    set password(value){
        this._password = value
    }
}

const dhruv = new User("V@dhruvesh.ai", "abc")
console.log(dhruv.email);