//Dates ---------------in future temporal

let d = new Date()
// console.log(d.toString());//Fri Mar 21 2025 20:59:34 GMT+0530 (India Standard Time)
// console.log(d.toISOString());//2025-03-21T15:29:34.791Z
// console.log(d.toJSON());//2025-03-21T15:29:34.791Z
// console.log(d.toLocaleDateString()); //21/3/2025
console.log(d.toDateString());// Fri Mar 21 2025
// console.log(d.toLocaleString());// 21/3/2025, 9:00:38 pm
// console.log(d.toTimeString());//21:01:04 GMT+0530 (India Standard Time)
console.log(typeof d);

let createdDate = new Date(2025, 2 , 21)
//Date(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date
let createdDate2 = new Date("01-31-25") // mmddyyyy or mmdddyy
console.log(createdDate2.toDateString())

// let myTimeStamp = Date.now();
// console.log(myTimeStamp)
console.log(createdDate2.getTime())

let myTimeStamp = Date.now();
console.log(Math.floor(Date.now()/1000)) // in sec

let d1 = new Date()
console.log(d1.getMonth())

// how to use:
// `the time right now is ${d1.getTime} , Thanks`

let a = d1.toLocaleString('default',{
    weekday: "long"
})
console.log(a)