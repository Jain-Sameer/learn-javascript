// Primitve
// 7 types : String, Number, Boolean, null,. undefined, symbol, BigInt

//  Is JS a dynamic or static typed? Dynamically Typed
let f_id = 65

let outsideTemp = null

let isMarried = false

let gender // undefined
let gender_2 = undefined //still undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);


// Reference Type (Non Primtiive)
// Arrays, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name : "hitesh"
}

// Primitive Types use Stack memory

// Non Primitive types use Heap memory

let myName = "sameerjain"

let anothername = myName
anothername = "vibha jain"

console.log(anothername);
console.log(myName);

// These are primtive data types, allocated in the stack memory and the value of myName used in defining anothername is not referencing myName, it is just copying from myName and pasting it into anothername.

let user1 = {
    name : "Sameer",
    age: 20
}

let user2 = user1

user1.name = "not Sameer" 
console.log(user1);
console.log(user2);
// changes both names of user 1 and user 2 as (objects - NON PRIMTIVES) are placed in heap mmemory and user2 references user1 for its data, any changes made to 1 will reflect in 2 and vice versa.


