function Setusernname( username ){
    //complex DB calls
    this.username = username
    //console.log("it is being called")
}

function createUser(username,email,password){
    // Setusernname(username) // it is not calling the function , only emaol and password is in the scope
    Setusernname.call(this , username) // current execution context is passed to function by call and this
    this.email = email
    this.password = password
}

const shivansh = new createUser("shivansh","shivansh@gmail.com","123456")
//console.log(shivansh) // output : shivansh

//ES6
class User1{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}_ABCD`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const shivansh2 = new User1("shivansh","shivansh@gmail.com","123456")
console.log(shivansh2.encryptPassword());
console.log(shivansh2.changeUsername());

//// behind the scenes
function User(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}_ABCD`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const xyz = new User("xyz","xyz@gmail.com","123456")
console.log(xyz.encryptPassword());
console.log(xyz.changeUsername());

//inhertance of JS--------------

class UserA{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`username is ${this.username}`)
    }
}

class Teacher extends UserA{
    constructor(username,email,password){
        super(username) // super keywords used to call the parent class constructor
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`adding course to ${this.username}`)
        }
}

const teacher1 = new Teacher("pantu","pantu@gmail.com","123456")
teacher1.addCourse()
const userA = new UserA("shivansh")
userA.logme()

console.log(userA === teacher1); // output : false
console.log(userA instanceof UserA); // output : true

// static

class UserB{
    constructor(username){
        this.username = username
    }
    static logme(){ // what does static do ?
        console.log(`username is ${this.username}`)
    }
    static createid (){ // statis is used for making a method as static that can be called without creating an object
        return `123`
    }
}

const iphone = new UserB("iphone")
console.log(UserB.createid())