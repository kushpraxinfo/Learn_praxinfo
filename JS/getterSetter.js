class User {
    constructor (email, password){
        this.email = email;
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }

    get password(){
        return `${this._password}hitehs`
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const kush = new User("kush","asdf")
console.log(kush.password);
