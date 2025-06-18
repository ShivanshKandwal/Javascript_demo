function A(num1 , num2){
    console.log("shivansh");
    console.log(num1 + num2);
}

function A(num1 , num2){
    console.log("shivansh");
    a = num1 + num2;
    return a  // return num1 + num2
}

//const result = A(3,5); // called execution
//console.log("Result: ",result);

function loginUserMessage(username = "sam"){
    if(username == undefined){ // empty string = false value i=== if(!username)
        console.log("invalid")
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Shivansh")) // nothing returns undefined

function calcprice(val1 , val2 , ...num1) {  // ...=spread/rest operator
    return num1
}

console.log(calcprice(200,400,500,2000)) // gives array

const User= { // creation of object and then passing
    username : "shivansh" , 
    price : 199
}
handle(User);

function handle(anyobj){
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);
}

handle({          // passing an object to a function
    username : "sam" , 
    price : 399
})

const arr1 = [200,400,100,600];
function rearr(getarr){
    return getarr[1]
}
console.log(rearr(arr1));

