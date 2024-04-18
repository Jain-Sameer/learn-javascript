const user = {
    name: "Sameer",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.name}! Welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.name = "Sam"
// user.welcomeMessage()

// console.log(this); //empty object
// console.log(this); //when this is ran in the browser, we get some values 

// function one(){
//     let uname = "Sameer"
//     console.log(this.uname); // undefined is the output, this keywork useful for objects only
// }
// one()

let one = () => {
    let uname = "Sam"
    console.log(this)
}

// one()


// const addTwo = (num1, num2) =>{ //explicit
//     return num1 + num2
// }
const addTwo = (num1, num2) =>  (num1 + num2) //implicit call

// when {} use return, other incase of single line functions, use implicit calls

const objreturn = (num1,num2) => ({name: 'Sameer'}) //this is how to use implicit functions to return objects

// console.log(objreturn(2,4));


