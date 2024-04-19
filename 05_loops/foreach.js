// const coding = [
//     'js', 'ruby','java' , 'python' , 'cpp'
// ]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

let result = myNums.filter( (num) => num > 4) // returns 

// console.log(typeof result);

let newNums = []
myNums.forEach(item => {
    (item > 4)? newNums.push(item): null;
});
console.log(newNums);



//  map functions can be chained like this

// array.map().map().map()  the result from the first map() from left, gives the evaluated result to 2nd map() and just like this, till the final map is encountered.