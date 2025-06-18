// let value = 3 ;
// let negval= -value;
// //console.log(negval); // -3

// // console.log(2_+_-_*_**_/_%_2);
// let str1 = "shiv";
// let str2 = "ansh";
// let str3 = str1+str2
// console.log(str3);//shivansh

// console.log(1 + 2);//3
// console.log(1 + "2");  //12
// console.log("1" + 2);  //12
// console.log("1" + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// console.log(+true); //1
// console.log(+"true");//nan

// let a = 100;
// a++;
// ++a;
// console.log(a);

//console.log("02">1) // 2="2"="02" ans true
// console.log(null>0) // converts null to a num 0 , hence > gives false
// console.log(null==0)// doesnt act as comparrison, its more of a check
// console.log(null>=0)//>= works as comparrison and includes 0

// console.log(undefined>=0) // always false , any comparsion

// //dont ever do this undefined/null 

// console.log("2" == 2)// allows for datatype conversions and then checks
// console.log("2" === 2) // false as this checkscomplete equality "==="

// const scores = 100;


// ========================== NON PRMITIVE ==========================
// const id = Symbol('1234')
// const id2 = Symbol('1234')
// console.log(id === id2);

// let obj={
//     name:"shivansh",
//     age:19,
// }
// console.log(obj);

// const yes = function(){
//     console.log("hello"); 
// }
// ==================================types of memmory ==============

// stack primitive value : copy 
let ytName = "DiveInCore"
let anotherName = ytName
anotherName = "abc"

console.log(ytName);//DiveInCore
console.log(anotherName)//abc
 

// and heap non primitive : orignal change

let userone = {   // object making
    email: "abc@gmail.com",
    upi:"1234@sbi ",
}

let usertwo = userone //object intialization
usertwo.email = "shivansh@gmail.com"

console.log(usertwo.email); //shivansh@gmail.com
console.log(userone.email); //shivansh@gmail.com