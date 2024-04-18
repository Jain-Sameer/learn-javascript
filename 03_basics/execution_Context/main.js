// in browser, this value in global text is window: object

// {} -> global context 

// functional execution context 

// eval execution context

// variables are allocated in the memory creation phase

let val1 = 10
let val2 = 5

function addNum(num1,num2) {
    let total = num1+num2
    return total
}
let result = addNum(val1,val2)
let result2 = addNum(21,12)

// this whole code snippet is first put in the global execution context
// in memory phase, val1 val2 result result2 are put into memory as undefined, addNum is put in as the function definition

//  in execution phase, val1 = 10, val2 = 5
// every function call (addNum) creates another execution context 
// now memory creation and execution phase are created in the execution context created by function calls
// memory for variables, val1 val2 undefined , total undefined
// execution, num1 = 10, num2 = 5, total = 10+5 =15, total returned to global execution context, now this function call , execution environment will be deleted.
// val1 = 10. val2 = 5, result1 = 15, addNum(21,12)
// addNum(21,12) repeats this process
// val1 = 10, val2 = 5, result = 15, result2 = 33