var c = 300 // still shows 30
let a = 300

if (true){
    let a = 10
    const b = 20 
    //console.log("INNER: ",a)
    var c = 30 //observe c has more opacity
}

// for(let i = 0 ; i < array.length ; i++){
//     const element = array[i] ; 
// }

// node has different scope than console global scope

//console.log(a);
//console.log(b);
//console.log(c);

// ---------nested scope------------------

function one(){
    const username = "Shivansh" ; 
    function two(){
        const website = "yt" ; 
        console.log(username) ;
    }
    // console.log(website);
    two()
}

// one()

// if ( true ) {
//     const username = "Shivansh"
//     if (username === 'Shivansh'){
//         const website = " yt"
//         console.log(username + website);
//     }
//     //console.log(website);
// }
//console.log(username);

// --------------INTERESTING----------------
function addone(num1){
    return num1 + 1
}
// console.log(addone(5))

const addtwo = function(num1){
    return num1 + 2
}

// addtwo(5) //ReferenceError: Cannot access 'addtwo' before initialization
// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

const userA = {
    username : "Shivansh" , 
    price : 999 ,
    Welcome: function(){
        console.log(`${this.username}  to website`)
        console.log(this)
    } 
}

// userA.Welcome()
// userA ,username = "sam"
// userA.Welcome()

// console.log(this) // {}
function chai(){
    let username = "shivansh"  
    //console.log(this)   //console.log(thi.username)--- gives undefined
}
// chai()

const chai1 = () => {
    let username = "shivansh"
    console.log(this);
}

// chai1()

// in browser console.log(this) gives window object , which is the global scope

// const add2 = (num1,num2) =>{ // arrow function
//     return num1+ num2
// }

// const add2 = (num1,num2) => num1 + num2
// const add2 = (num1,num2) => (num1 + num2)
const add2 = (num1,num2) => ({Username:"shivansh"}) // requires curly for object return

// console.log(add2(3,4))


// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    console.log(`DB CONNECTED`); //named iife
})(); // Correct placement of ()
//so , (function(){--code--})(--execution) - ()()


( (name) => {
    console.log(`hi my name is ${name}`) ; //unnamed iife
})("shivansh");
