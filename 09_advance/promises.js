const promise1 = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('dhruv')
        resolve(); // this method invoked then() method
    }, 1000)
});

promise1.then(() => {   // This is a resolve method denoted as then()
    console.log('Promise resolved successfully'); // this method is executed only when it is invoked. It is invoked through resolve() method
})

new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log("setTimeout method run");
        resolve();
    }, 1000)
}).then(()=>{
    console.log("Resolve method 2 run");
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve({username: "dhruv", password : "123"});
    },1000)
})

promise3.then(function(user){
    console.log(user);
})

// now we used reject method
const promise4 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username: "dhruv", password:"123"})
        }else{
            reject('ERROR: something went wrong')
        }
    }, 1000)
})

promise4.then((user)=>{
    console.log(user);  // it print username and password
    return user.username;   // it return username as string
}).then( (username)=>{
    console.log(typeof username); // string
    console.log(username);  // it print only username
}).catch( (error)=>{
    console.log(error);
}).finally( ()=> console.log('Promise is either resolved or rejected'))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromises(){
    try{
        const response  = await promiseFive;
        console.log('Inside consumePromises function'); 
        console.log(response); // it print username and password
    }
    catch(error){
        console.log(error);
    }
}

consumePromises();


async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(typeof data);  // object
        // console.log(data); // it print all the users
        console.log(data[0]); // it print first user
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

fetch('https://api.github.com/users/vaghasiya-dhruvesh')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log("E: ", error);
})

// promise.all
// yes this is also available