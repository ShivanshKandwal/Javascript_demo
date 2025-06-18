//if(condition){
//    //code} else{
//    //code}

const userLoggedIn = false
// <,>,<=,>=,==,===,!=,!==,&&,||
// == checks only value , === checks value and datatype 
// 2=="2" true , 2==="2" false
if(userLoggedIn){
    //console.log("Yes")
} else{
    //console.log("No")
}

const score = 200

if (score > 100){
    const power = 'fly'
    //console.log(` user power : ${power}`);
}
//short hand for if condition is 
balance = 700;
// if (balance > 1000) console.log("You have money");
// else console.log("You are broke") ; // never use this , always use {}
if (balance > 1000) {
    //console.log("You have money");
}
else if (balance > 500) {
        //console.log("You are not broke");
}
else {
    //console.log("You are broke");
}

if (balance > 1000 && userLoggedIn) {
    //console.log("user logged in and has money");
}
// && = and , || = or
if (balance > 1000 || userLoggedIn) {
    //console.log("user logged in or has money");
}

//switch(key){
//    case value1:
//        //code
//        break;
//    case value2:
//        //code
//        break;
//    default:
//        //code
//        break;
//}

const month = 3 // for key = string write "" in case
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        //console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid Month");
        break;
}

// truthy and falsy

const userEmail = "as"

if (userEmail){
    //console.log("Got User Email");

} else{
    //console.log("No User Email");
}
//falsy value : false, 0,-0 ,in BigInt -  0n ,  "", null, undefined, NaN
//truthy value : everything else ,"0",'false',""(everything in strings)[],{}, function(){} 

if(userEmail.length === 0){
    //console.log("No User Email");
} else{
    //console.log("Got User Email");
}

const emptyobjk ={} ; 
if (Object.keys(emptyobjk).length === 0){
    //console.log("Empty Object");
}

//nullish coalescing operator (??)
// it checks for null and undefined only
let val1 ;
//val1 = 5 ?? 10;
//val1 = null ?? 10; // if val1 is null or undefined then 10 will be assigned to val1
val1 = undefined ?? 10; 
//console.log(val1);

//ternary operator
//condition ? true : false
const val2 = 100;
const answer = val2 > 100 ? "greater" : "lesser";
//console.log(answer);


// -----------------Itereation----------------------
// for loop
// for(initialization; condition; increment/decrement){ //code}

for (let i = 0; i <= 10 ; i++) {
    const num = i; // scope of element is within the loop
    if (i == 5){
        //console.log("5 is the best");
    }
    //console.log(num);  // ctrl + shift + l for multi cursor 
}

for (let i = 0; i <= 10 ; i++) {
    for (let j = 0; j <= 10; j++) {
        //console.log(i + "*" +  j + "=" + i*j);
    }
}

let arr = [0,1,2,3,4,5,6,7,8,9,10];
for( let index = 0 ; index < arr.length ; index++){
    //console.log(arr[index]);
}

//break and continue
for (let i = 1; i <= 20 ; i++) {
    if (i == 5){
        //console.log("detected 5");
        break;//continue
    }
    //console.log(`Value of i is ${i}`);
}

// while
let i = 0;
while (i <= 10) {
    //console.log("value of index is " + i);
    i = i+ 2;
}
// do while
let j = 11;
do {
    //console.log("value of index is " + j);
    j = j+ 2;
}while(j <= 10);

// -----------------High Order Array Itereation----------------------
//for of
// ["","",""] .[{},{},{}]

const arr1 = [0,1,2,3,4,5,6,7,8,9,10];

for ( const num of arr1){
    //console.log(num);
}

const name = "shivansh";

for (const char of name){
    //console.log(char);
}

const map = new Map(); 
// what is map ? map is a collection of key value pairs and it is iterable and ordered
//it has no duplicate keysand it is unique
map.set('IN','India');
map.set('US','United States of America');
map.set('UK','United Kingdom');
map.set('AU','Australia');

//console.log(map);

for (const [i,j] of map ) {
    //console.log(i,"lmao" , j);
} //in out put we get key and value of map separated by lmao

const myOBJ = {
    'game1' : 'GTA',
    'game2' : 'The Finals'
}

//for (const [i,j] of myOBJ ) {
   //console.log(i,"lmao" , j);
//}// myOBJ is not iterable . to iterate in object we use for in loop

//for in loop is used to iterate over the keys of an object
for (const i in myOBJ ) { 
    //console.log(`${i} shortcut is for ${myOBJ[i]}`);
}
// in output we get key and value of object separated by shortcut is for

const programmingLanguages = ['C','C++','Java','Python','JavaScript'];
for (const key in programmingLanguages) {
    //console.log(key); // it will give us the index of the array
}
// in output we get index of the array , becausein arrays keys are its indices

for ( const i in map ){
    //console.log(i); // NO OUTPUT , because map is not iterable with for in loop
}

//for each loop
const  coding = ['C','C++','Java','Python','JavaScript'];

coding.forEach((element,index) => {
    //console.log(element + " is at index " + index);
});
// another way to write is
coding.forEach(function(element,index){
    //console.log(element + " is at index " + index);
});
// in output we get element of the array and its index

function Printme(item) {
    console.log(item);
}
//coding.forEach(Printme);

const Mycoding  = [
    {
        langName : 'javascipt',
        langfilename : 'js',
    },
    {
        langName : 'python',
        langfilename : 'py',
    },
    {
        langName : 'java',
        langfilename : 'java',
    },
    {
        langName : 'c++',
        langfilename : 'cpp',
    }
]

Mycoding.forEach(function(item){
    console.log(item.langName + "has file name "+ item.langfilename);
});
