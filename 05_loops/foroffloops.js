// for of loops

let arr = [1,2,3,4,5]


// console.log(Object.entries(arr))

let string = 'sameer jain'

for (const i of string) {
    // console.log(`Each char is ${i}`);
}

const map = new Map()

map.set('IN', 'India')
map.set('US', 'United States of America')
map.set('SL', 'Sri Lanka')

// console.log(map);

for (const key of map) { // prints a key, value pair array
    // console.log(key);
}
for (const [key, value] of map) { // we have key and value , both seperate, can use one of them , if need be.
    // console.log(`${key} :- ${value}`);
}
