const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
//console.log(descriptor);

 // console.log(Math.PI)
// Math.PI = 3.15
// console.log(Math.PI)

const obj1 = {
    name :"shivansh",
    email : "shivansh@gmail.com",
    isaAvailable : true ,
    sk1 : function(){
        console.log("hello");
    }
}

console.log(Object.getOwnPropertyDescriptor(obj1,"name"))
// Object.defineProperty(obj1 ,"name", {
//     writable : false,
//     enumerable : false,
// } )
//console.log(Object.getOwnPropertyDescriptor(obj1,"name"))

for (const[key,value] of Object.entries(obj1)){
    if(typeof value !=='function'){
    console.log(`${key} : ${value}`);
        }
    }