// singleton  - not created when created as literals

// objects literals
let mySym = Symbol('12321')
const user = {

    name: "Sameer",
    [mySym]: "12321",
    "full name": "Sameer Jain",
    age: 20,
    location: "Patiala",
    email: "sameer@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]

}

// console.log(user.name);
// console.log(user["name"]);
// console.log(user["full name"]);
// console.log(typeof user[mySym]);

// Object.freeze(user);

// user.name = 25;
// user.age = 25;
//neither an error thrown, nor was the value changed. freeze allows us to lock the object.
// console.log(user.name + " " + user.age);

user.greetings = function(){
    console.log(`Hi There! ${this["full name"]}`);
}

console.log(user.greetings());