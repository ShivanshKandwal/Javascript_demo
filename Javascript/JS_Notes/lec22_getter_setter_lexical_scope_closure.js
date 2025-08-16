class abc{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    get password(){
        return this._password.toUpperCase()
        //why did underscore make it acceptable?
    }
    set email(value){
        this._email = value
    }
    set password(value){
        this._password = value
    }
}
const shivansh = new abc("shivansh@gmail.com","abcd")
console.log(shivansh.password);
console.log(shivansh.email);

// function based approach
//object based approach
