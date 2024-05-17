// const user1 = {
//     username :'Sameer',
//     loginCount : 32,
//     signedIn : false,

//     getUserDetails: function(){
    
//         // console.log('Got this value from this databse.');

//         // console.log(`Username : ${this.username}`);

//         console.log(this);
//     }

// }
// if we want to create another user object, either we can copy paste, which is not good practice and very tedious
// that is why we have constructor functions, oops, etc


// console.log(user.getUserDetails());
// const variable = 234;

// console.log(this);

// const promise1 = new Promise();
// const date = new Date();


function user(username, loginCount, isLoggedIn){
    this.username = username
    this.isLoggedIn = isLoggedIn
    this.loginCount = loginCount

    return this;    
}

const newUser = user('sameer', 8, false);
const anotherUser = user('Jain', 0, true);
// console.log(anotherUser);
// here we can see that the newUser are overwritten by the anotherUser. this is because no new keyword was used.
// this new keyword is the constructor fucntion which helps us achieve that -> creates a new object instead of overwriting

const one1 = new user('A', 8, true);
const two2 = new user('B', 5, true);

console.log(one1);