const User = {
    _email: 'dhruv@gmail.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const dhruv = Object.create(User)
console.log(dhruv.email);