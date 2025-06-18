const arr = [0,1,2,3,4,5,6,7,8,9]//method 1
//console.log(arr[5]); 
const arr1 = new Array(1,2,3,4,5);//method 2
//console.log(arr1); 
const arr2 = ["shivansh","kandwal"]//valid 
//console.log(arr2);

//Array method ==================================
//arr.push(10,11);
//arr.pop()
//arr.unshift(9) // start add , but uses n amt of shifts
//arr.shift


const NewArr= arr.join()//string mein coverted
// console.log(arr);
// console.log(typeof NewArr);

//slice , splice
// console.log("A ",arr)
// const m = arr.slice(1,3)
// console.log("B" , m);

const m1 = arr.splice(1,3) // subtracts from orignal too
// console.log("C" , m1);
// console.log(arr);

const mh=["Thor","IronMan","Spiderman"]
const dch=["Superman","flash","batman"]
//mh.push(dch);
//[ 'Thor', 'IronMan', 'Spiderman', [ 'Superman', 'flash', 'batman' ] ]
//array can take arrays in input


const allh = mh.concat(dch); // gives new array
// console.log(allh);

const allheroes = [...mh,...dch]//spread method
// console.log(allheroes);

const array = [1,2,3,[4,5,6,],7,8,9,[10,11,[12,13]]]
const bigarray = array.flat(1);// 1 depth
// console.log(bigarray);
const bigarray2 = array.flat(Infinity);// infinty depth
// console.log(bigarray2);

// console.log(Array.from("shivansh"));


console.log(Array.from({name: "shivansh"})); 
/// interesting , have to specify keys---------------







// =========================================extra=======================
// [[Prototype]]
// : 
// Array(0)
// at
// : 
// ƒ at()
// concat
// : 
// ƒ concat()
// constructor
// : 
// ƒ Array()
// copyWithin
// : 
// ƒ copyWithin()
// entries
// : 
// ƒ entries()
// every
// : 
// ƒ every()
// fill
// : 
// ƒ fill()
// filter
// : 
// ƒ filter()
// find
// : 
// ƒ find()
// findIndex
// : 
// ƒ findIndex()
// findLast
// : 
// ƒ findLast()
// findLastIndex
// : 
// ƒ findLastIndex()
// flat
// : 
// ƒ flat()
// flatMap
// : 
// ƒ flatMap()
// forEach
// : 
// ƒ forEach()
// includes
// : 
// ƒ includes()
// indexOf
// : 
// ƒ indexOf()
// join
// : 
// ƒ join()
// keys
// : 
// ƒ keys()
// lastIndexOf
// : 
// ƒ lastIndexOf()
// length
// : 
// 0
// map
// : 
// ƒ map()
// pop
// : 
// ƒ pop()
// push
// : 
// ƒ push()
// reduce
// : 
// ƒ reduce()
// reduceRight
// : 
// ƒ reduceRight()
// reverse
// : 
// ƒ reverse()
// shift
// : 
// ƒ shift()
// slice
// : 
// ƒ slice()
// some
// : 
// ƒ some()
// sort
// : 
// ƒ sort()
// splice
// : 
// ƒ splice()
// toLocaleString
// : 
// ƒ toLocaleString()
// toReversed
// : 
// ƒ toReversed()
// toSorted
// : 
// ƒ toSorted()
// toSpliced
// : 
// ƒ toSpliced()
// toString
// : 
// ƒ toString()
// unshift
// : 
// ƒ unshift()
// values
// : 
// ƒ values()
// with
// : 
// ƒ with()
// Symbol(Symbol.iterator)
// : 
// ƒ values()
// Symbol(Symbol.unscopables)
// : 
// {at: true, copyWithin: true, entries: true, fill: true, find: true, …}
// [[Prototype]]
// : 
// Object