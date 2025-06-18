//Promise object represents the eventual comepletion (or failure) of an asynchronous operation and its resulting value
const promiseOne = new Promise(function (resolve, reject){
    //do an async task / DB calls , cryptography , network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    }, 1000)
}) // earlier q or bluebird

promiseOne.then(function(){
    console.log("Promise Consumed"); // doesnt show up unless resolve is used
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2')
        resolve()
    }, 1000)
}).then(function(){
    console.log("async 2 resolve")
})

const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'shivi' , email:'kandy@gmail.com'})
    })
})
PromiseThree.then(function(user){
    console.log(user)
})

const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "SHIVI", password: "abcd1111"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

PromiseFour.then((user) => {
   console.log(user);
   return user.username
}).then((username) => { // upar wala element se chaining
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all

//--------- fetch notes ------------
// error 404 is always a response not a rejection
//special fetch queue is called microtask queue -  
// has higher proiority than macrotask queue
