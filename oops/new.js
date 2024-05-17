function product5(num){
    this.num = num
    return num*5;
}

product5.power = 2;
// . opertaor used with functions ? which should mean that functions are also objects in JS. Yes, that is correct.
console.log(product5(5));
console.log(product5.power);
console.log(product5.prototype); // output is {}

function createUser(name, score) {
   this.name = name
   this.score = score
}

// createUser.prototype.increment = function(){
//     score++
// } // this function gets confused which user score to implement. this is because it doesnt have any context about which called it. here we can also use the this operator

createUser.prototype.increment = () => {
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
const chai = new createUser('Chai',25)
const tea = new createUser('Tea', 10)

// chai.printMe() //TypeError: Cannot read properties of undefined (reading 'printMe')

// using new keyword will resovle this error.

chai.printMe();

// Some notes about new keyword

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/