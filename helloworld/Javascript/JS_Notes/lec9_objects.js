// singleton ,apni tarah ka ek hi object. (like a static in oops maybe?) object literal mein banta only , not in literals, constructors allow multiple


// object litrals

const s = Symbol("key1") ; 
//cant be used as a key in object by default , interview ques .see line22

const JsUser = {
    name : "Shivansh", // name string ki tarah process ho raha hai
    "full_name" : "Shivansh Kandwal", // not a way to access by line 15
    age:19,
    [s] : "key1" , 
    location: "Delhi",
    email: "shivansh@gmail.com",
    isloggedin: false,
    lastlogindays: ["monday","saturday"]
}

//console.log(JsUser."full_name")  //   not a good way
// console.log(JsUser["email"]) //shivansh@gmail.com
// // console.log(typeof JsUser["s"]) //----string
// console.log(JsUser[s])

// JsUser.email = "shivansh.123456@gmail.com"
// Object.freeze(JsUser)
// console.log(JsUser["email"])
// console.log(JsUser) // symbol key1

JsUser.greeting = function(){
    console.log("Hello JS User");
};

JsUser.greetingTwo = function(){
    console.log( `Hello JS User,${this.name}`);
};

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// these were object literals 
// now time for singletons and constructors  

//const aUser = new Object()  // singleton obeject
const aUser = {} // non singleton obeject

aUser.id="123abc"
aUser.name="Sammy"
aUser.isLoggedIn=false

//console.log(aUser);

const rUser = { //nesting example
    email : "abc@gmail.com",
    full_name: {
        user_full_name : {
            firs_name :"Shivansh",
            last_name : "Kandwal"
        }
    }
}

//console.log(rUser.full_name.user_full_name);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj3 = {5: "a" , 6: "b"}

//const obj3 = { obj1 , obj2}
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//const obj4 = Object.assign({},obj1,obj2,obj3) 
//you should give curly barces
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj4 = { ...obj1, ...obj2 , ...obj3}
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } ---- same , but used more

//console.log(obj4)

const User = [ // square bracket used for array of objects
    {
        id: 12, 
        emails: "abc@gmail.com"
    },
    {
        id: 12, 
        emails: "abc@gmail.com"
    },
    {
        id: 12, 
        emails: "abc@gmail.com"
    }
] 

// console.log(User[1].emails)
// console.log(Object.keys(rUser))
// console.log(Object.values(rUser))
// console.log(Object.entries(rUser))

//console.log(aUser.hasOwnProperty('isLoggedIn'))

//destructuring ----- react syntax {company}
const course = {
    coursename : "js in hindi" ,
    price : "999" ,
    courseInstructor : "shivi"
}

//course.courseInstructor // method to call

const{courseInstructor:instructor} = course
console.log(instructor)

// JSON API
// {
//     "name" : "shivansh",
//     "coursename" : "js in hindi" ,
//     "price" : "999" ,
//     "courseInstructor" : "shivi"
// }


// -------------------------more properties----------------------------
// [[Prototype]]
// : 
// Object
// constructor
// : 
// ƒ Object()
// hasOwnProperty
// : 
// ƒ hasOwnProperty()
// isPrototypeOf
// : 
// ƒ isPrototypeOf()
// propertyIsEnumerable
// : 
// ƒ propertyIsEnumerable()
// toLocaleString
// : 
// ƒ toLocaleString()
// toString
// : 
// ƒ toString()
// valueOf
// : 
// ƒ valueOf()
// __defineGetter__
// : 
// ƒ __defineGetter__()
// __defineSetter__
// : 
// ƒ __defineSetter__()
// __lookupGetter__
// : 
// ƒ __lookupGetter__()
// __lookupSetter__
// : 
// ƒ __lookupSetter__()
// __proto__
// : 
// (...)
// get __proto__
// : 
// ƒ __proto__()
// set __proto__
// : 
// ƒ __proto__()
