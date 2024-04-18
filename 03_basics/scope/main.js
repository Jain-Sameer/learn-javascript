let a = 301
{ //Scope
    let a = 10
    const b = 20
    var c = 30
    console.log("A Inner: ", a);
}
console.log("A Outer: ",a);
// var declares gloabally

// console.log(a);
// console.log(b);
// console.log(c);


// +++++++++++++++++ interesting +++++++++++++++++++
console.log(addone(5))

function addone(value){ // function
    return value + 1 
}


const addTwo = function(num){ // function held in a variable known as, expression
    return num + 2
}
addTwo(2) // works fine, but if this line written above line 24 , then error. as it is basically a variable so its usage must be after it is declared.
