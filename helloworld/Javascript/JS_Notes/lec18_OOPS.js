//oop in javascript is a paradigm that uses objects and their interactions to design applications and computer programs. It is a way of structuring code so that it is more modular, reusable, and easier to maintain. OOP is based on the concept of "objects", which can contain data and methods that operate on that data. In JavaScript, OOP is implemented using prototypes, classes, and inheritance. The main principles of OOP include encapsulation, inheritance, polymorphism, and abstraction. By using these principles, developers can create complex applications that are easier to understand and maintain over time.

// why use oop?
// object literal 
//constructor function
//prototype / proto 
//classes 
const user = {
    username: "Shivansh",
    logincount: 8,
    isloggedin : true,

    getUseDetails: function(){
        //console.log(`got user Details`);
        //console.log(` username :${this.username}`);
        //console.log(this);
    }
}

// console.log(user.username); 
//console.log(user.getUseDetails()); 
// console.log(this);

// for multiple users we use constructor function
function userconst(username, logincount, isloggedin){
    this.username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin;

    return this
    this.getUseDetails = function(){
        console.log(`got user Details`);
        console.log(` username :${this.username}`);
        console.log(this);
    }
}

const user1 = new userconst("Shivansh", 8, true);
const user2 = new userconst("ABCDE", 8, false);

//user1.getUseDetails();
//user2.getUseDetails();
// console.log(user1.constructor);
//console.log(user2);

// ---------------------------------PROTOTYPES -------------------------------