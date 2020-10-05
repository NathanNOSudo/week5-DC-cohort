let promise = new Promise(function(resolve, reject){
    resolve("Hello") // message defined here
})

promise.then((message) => {
    console.log(message)
    return message + " John!" // return carries the message over
}).then((newMessage)=>{
    console.log(newMessage)
})



// let intervalId = -1

// let promise = new Promise(function(resolve, reject){
//     let counter = 10
//     setInterval(function(){
//         if(counter % 2 == 0){
//             resolve(counter)
//         } else {
//             reject(counter)
//         }
//     }, 1000)
// })

// promise.then((ctr)=>{
//     console.log(ctr)
// }).catch(function(message){
//     console.log(message)
//     clearInterval(intervalID) // stop the interval
// })



// let isTableReady = true

// let promise = new Promise(function(resolve, reject){
//     if (isTableReady){
//         resolve("Your Table is Ready!")
//     } else {
//         reject("Too crowded!")
//     }
// })

// promise.then(result => {
//     console.log(result)
// }).then(() => {
//     console.log("THEN DO THIS")
// }).catch(message => {
//     console.log(message)
// })


