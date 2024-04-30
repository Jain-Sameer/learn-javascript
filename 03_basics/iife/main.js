// immediately invoked function expression (iife)

// to prevent pollution from golbal scope
( function onw(){
    //named iife function
    console.log('Function One - Named IIFE')
})();

//to use 2 or more iife functions, the previous iife function must have a semicolon at its end, to ensure that the function has ended.

( (name) => {
    console.log('Function Two - Unnamed IIFE: ', name ) ;
})('Sameer');

// this is how we can pass arguments in iife functions.

(function addTwo(a, b) {
    console.log(`result is : ${a+b}`);
}) (10,20);