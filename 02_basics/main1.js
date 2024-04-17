const myArr = [0,1,2,3,4,5,6]
const myHeroes = ["Batman","Superman","Flash","WonderWoman","Aquaman","Cyborg","Green Lantern"]

const newArray = new Array(1,2,3,4,5)

// const myArr1 = myArr.join()

// console.log(typeof myArr);

// console.log(typeof myArr1);

//slice splice

console.log("A: ", myArr);
const myn1 = myArr.slice(0,3) // slice -> returns an array starting from 0 till 2 (not inlcuding  3)
// console.log("myn1: " + myn1);
// console.log("B: ", myArr);

const myn2 = myArr.splice(0,3) // splice -> (0,3) starting from 0th index, cuts the array for the first 3 elements starting from 0th index, or the ith index passed in the parameters.
// console.log("myn2: " + myn2);
// console.log("C: " + myArr);

