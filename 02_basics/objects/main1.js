//objects -> constructors
// const twitterUser = {} // Non SIngeton Object
const twitterUser = new Object() //Singleton  Object

twitterUser.id = "sameerj2003"
twitterUser.name = "Sameer Jain"
twitterUser.loggenIn = false;

// console.log(twitterUser);



let newObj = {
    age: 20,
    2: "B",
    3: "C"
}

// Object.assign(twitterUser, newObj) // the merged result is returned in the first parameter passed, in this case, twitterUser. to avoid that, use {} (an empty object) and return the result into empty object and then into another object.

// let mergedObj = Object.assign({}, twitterUser, newObj)

// console.log(mergedObj);
// console.log(twitterUser); 
// Now the twitterUser doesnt change, we get a new a obj with contents of both the objects.

// objects can be merged using spread operator ... just like arrays.

// mergedObj = {...newObj, ...twitterUser}
// console.log(mergedObj);

// console.log(Object.keys(twitterUser));
// console.log(Object.values(twitterUser));
// console.log(Object.entries(twitterUser));

console.log(twitterUser.hasOwnProperty('loggenIn'));