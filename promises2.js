async function getUsers(){
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary');
        const data = response.json();
        console.log(data);
    } catch (error) {
        console.log('E : ' + error);
    }
}