// fetch('https://google.com').then().catch().finally()
// Promise 1
// const promise1 = new Promise(
//     function (resolve,reject) {
//        // Do an async task
//        // Like DB calls, CryptoGraphy, Network related calls
//        setTimeout(function(){
//         console.log('Async Complete');
//         resolve(); // this is must to get the acknowledgement from then function.
//        }, 1000) 
//     }
// );
// then -> connected to resolve
// promise1.then(function () {
//     console.log('Promise Consumed');
// });
// //Promise 2
// new Promise(function(resolve, reject){
//     setTimeout(function name(params) {
//         console.log('Another Promise -> Async 2');
//         resolve();
//     },1000)
// }).then(function () {
//     console.log('Async Two Completed!');
// });

// it can be used here without the need to create a variable
//Promise 3
// const promise3 = new Promise(function (resolve, reject) {
//     setTimeout(function(){
//         resolve({
//             username: "Sameer",
//             age: 20,
//             email : 'sjain5144@gmail.com'
//         })
//     },1000)
// });

// promise3.then(function (data) {
//     console.log(data);
// })


//Promise 4

const Promise4 = new Promise(function(resolve, reject){
    setTimeout(function name(params) {
        let error = true;
        if(!error){
            resolve({
                username : 'sameer',
                password : '123'
            })
        }
        else{
            reject('ERROR : Something went Wrong')
        }
    },1000)
})

// const userName = Promise4.then((user)=>{
//     console.log(user);
//     return user.username;
// }).catch()
// console.log(userName); // this doesnt return us the data from then.

// Promise4
// .then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((data) => {
//     console.log(data);
// }).catch(
//     function (error) {
//         console.log(error);
//     }
// ).finally(
//     () => console.log('Promise is either resolved or rejected.')
// )
// console.log(userName);


//promise 5

const promise5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if(!error){
            resolve({
                username: 'Sameer Jain',
                languageKnown : 'JavaScript'
            })

        }
        else{
            console.log('ERROR: JS Went Wrong');
        }
    },1000)
})

// promise5.then()
// async function consumeP5() {
//     try {
//         const response = await promise5
//         console.log(response);
//     } catch (error) {
//         console.log('Error');
//     }
// }
// // if no error is coming from the promise , then the async works fine, otherwise we need to use trycatch
// consumeP5()

async function getAllUsers(){
    try {
    const URL = 'https://jsonplaceholder.typicode.com/users'
    const response = fetch(URL)
    console.log(response);
    const data = response.json()
    console.log(data);
    } catch (error) {
        console.log('E: '+ error);
    }
}

getAllUsers()
// 42 mints complete