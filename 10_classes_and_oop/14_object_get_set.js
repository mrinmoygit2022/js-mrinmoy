const User = {
    _email: 'm@google.ai',
    _password: 'abc',


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }, 
    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password = value
    } 
}

    const tea = Object.create(User)
    console.log(`Email: ${tea.email}`);
    console.log(`Password: ${tea.password}`);