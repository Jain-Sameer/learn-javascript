const userEmail =  []

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("No user email");
}

//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// [], "0", 'false', " ",{ }, function(){}


if (userEmail.length === 0) {
    console.log("Empty array");
}

const myObj = {

}

if (Object.keys(myObj).length === 0) {
    console.log("Empty");
}

// Nullish Coalescing Operator (??) : numm undefined
let val1;
// val1 = 5 ?? 10;

// val1 == null ?? 5 // ?? assigns a not null or not undefined value
val1 = undefined ?? null // 
// val1 =
console.log(val1);

val1 = 10
// Terniary Operator

// (condition) ? true : false;

val1 == 10 ? console.log("10") : console.log("not 10");