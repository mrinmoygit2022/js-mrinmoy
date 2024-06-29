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
        // return this._password.toUpperCase()
        return `${this._password.toUpperCase()}mrinmoy`
    }
    set password(value){
        this._password = value
    }
}

const Mrinmoy = new User("m@google.ai", "abc");
console.log(`Email: ${Mrinmoy.email}`)
console.log(`Password: ${Mrinmoy.password}`)