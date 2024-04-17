let score = 45

let balance = new Number(45)
// console.log(balance);
// console.log(score);

// toString(), toPrecision(), toFixed()

const num1 = 10000000000

// console.log(num1.toLocaleString('en-IN'));

//  ---- MATHS -----

console.log(Math);

// console.log(Math.round(-56.54646));

// console.log(Math.ceil(3.1));
// console.log(Math.floor(3.1));

// console.log(Math.pow(5,2));

console.log(Math.random());
console.log((Math.random()*10) + 1);
// Math.random gives value between 0 - 1
const min = 10;
const max = 20;

let result = Math.floor((Math.random() * (max-min+1)) + (min))

console.log(result);