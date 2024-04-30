function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("M");
    console.log("E");
    console.log("E");
    console.log("R");
}

// sayMyName()

function add(a, b){
    return a+b
}

// ... also spread also rest, combined all arguments passed into an array

// example :

function calculatePrice(...num1){
    return num1
}
// the values passed are turned into an array, more specifically an object.
const returnNum = calculatePrice(100,200,300,400)
console.log( Object.entries(returnNum));


function CalculatePrice(a,b,...num1){
    return num1
}

console.log(CalculatePrice(100,2000,3000,40000));

// the rest operator takes values after a and b and combined the remaining into an array in this case only 3000 and 40000.

const user = {
    name: "Sameer",
    Age: 20
}

function handleObj(anyobject){
    console.log(`Name : ${anyobject.name} and Age : ${anyobject.age}`);
}

// handleObj(user)
// handleObj(
//     {
//         name: "Howowowo",
//         age: 21
//     }
// )

// We can also pass array
