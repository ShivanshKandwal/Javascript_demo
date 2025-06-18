//prototypal language
//Prototypal inheritance is a mechanism in JavaScript where objects can inherit properties and methods from other objects. This is achieved through the use of prototypes.

function multiplyby5(num) {
    return num * 5;
}

multiplyby5.power = 2

// console.log(multiplyby5(5)) // output : 25
// console.log(multiplyby5.power)// output : 2
// console.log(multiplyby5.prototype) // output : {}

function createUser(username,score){
    this.username = username,
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++ // jisne bulaya hai = this
}

createUser.prototype.printMe = function(){
    console.log(this.username) // output : chai
    console.log(this.score) // output : 25
}

const chai = new createUser("chai",25) 
// "new" used for constructor
const tea = new createUser("tea",250)

//console.log(chai.username) // output : chai
//console.log(chai.score) // output : 25

//directly function use kar sakte hai

// chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

let myName = 'Shivansh     '
let myChannel = 'diveincore'
// console.log(myName.truelength) // output : undefined

let myHero = ["Hulk","Thor","IronMan","spiderman"]

let heroPower = {
    thor : "lightning",
    hulk : "super_strong",
    ironman : "flight",
    getThorPower : function(){
        consoele.log(`thor's power is : ${this.thor}`)
    }
}
Object.prototype.SK = function(){
    console.log(`SK is present in all objects`)
}
Array.prototype.arrSK = function(){
    console.log(`SK Array`)
}
heroPower.SK()
myHero.SK()
myHero.arrSK()
//heroPower.arrSK()  doesnt work

//inheritance
const User = {
    name : "Shivansh" ,
    Email : "shivansh@gmail.com"
}
const Teacher = {
    makeVideo : true
}
const TeachingSupport  = {
    isavailabe : false
}
const TASupport = {
    makeAssignment : "JS" ,
    fullTime : true ,
    __proto__ : TeachingSupport
}
Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUser = "abcde   "
String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(this.trim().length)
}
anotherUser.truelength() 