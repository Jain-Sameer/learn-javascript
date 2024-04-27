const nyNums = [1,2,3,4]

// const myTotal = nyNums.reduce( function (acc, current){
    
//  console.log(`Accumulator : ${acc} Current Value : ${current}`);

//     return acc + current

// },0) // this 0 is the initial value for the accumulator

// const myTotal = nyNums.reduce( (acc, curr) => {return acc+curr},0)

// console.log(`Total : ${myTotal}`);


const shoppingCart = [
    {
        name: 'js course',
        price : 2999
    },
    {
        name: 'c++course',
        price : 1999
    },
    {
        name: 'full stack web course',
        price : 2999
    },
    {
        name: 'mern course',
        price : 4599
    },
    {
        name: 'flutter course',
        price : 1999
    }
]

console.log((shoppingCart.reduce( (acc, item) => acc + item.price, 0)));