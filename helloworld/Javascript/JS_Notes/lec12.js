//JS execution context
//first , global EC is different from browser , for "this" it gives windows
// JS = single threaded
//functional EC
// Mongoose - Eval EC

// {} --code-- => memory creation phase , excution phase
let val1 = 10
let val2 = 5
function add(num1,num2){
    let total = num1 + num2
    return total
}
let result2 =(val1+ val2)
let result1 = add(1,2)

//in memory phase , val1 and val 2= undefined  , them add = defination , r1 , r2 = undefined
//in execution phase ,val1 = 10 and val2 = 5 add = ---NEW EC--- new variable environment+ E thread
//memory phase and Execution again for new EC
// val1 = undefined val2 = undefined , total = undefined, Execution ->val1 = 10 and val2 = 5
//total =15 , after the value is sent to prev EC new is deleted.(return value passed to global)
// same for result2)
