
// async function getUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary');
//         // console.log(response);
//         const data = await response.json(); // response.json() takes time to process that is why we need to await it also
//         console.log(data); 
//     } catch (error) {
//         console.log('E : ' + error);
//     }
// }
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) =>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
.finally()

//fetch , when we see in the terminal the outputs other asyncs and awaits are being displayed after the fetch output. :O
//  this is because fetch creates a priority queue like special queue which executes before the task queue 