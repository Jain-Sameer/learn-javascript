//destructuring of objects

const course = {
    name: "JS",
    price: "999",
    instructor: "Sameer"
}

const {instructor: ins, price: cost} = course

console.log(ins);