"use strict"; //Treat all code as newer JS code

// alert (3 + 3)  this syntax works in browser, not in node.js

let fname = "Sameer"
let age = 20
let isMarried = false

//  Above are examples of datatypes

// number = 2^53 range
// big int
// string = "place text here"
// bool = true or false 
// null -> standalone value , type of null is object
// undefined -> when no value assigned , unique type => (undefined)
// symbol -> unique

// object 

// console.log(typeof(undefined));

let score = "33as"

// console.log(typeof score); // string output

let value_num = Number(score)

// console.log(typeof value_num); // number output
// console.log(value_num); // value is "NaN"

// "33" -> 33
// "33dsafsd" -> NaN
// "true" -> 1

// operations on datatypes

let value = 3
let negValue = -value;

// console.log(2-"2");

let result = (2+"1" == "2" + 1)
// console.log(result);


console.log(1+ 2+ "3")
console.log("1"+ 2+ 3)

// The Login behind this conversion or any coversion of datatypes can be read here : https://tc39.es/ecma262/#sec-toprimitive

 