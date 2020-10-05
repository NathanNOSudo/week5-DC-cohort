
let character = "a"

let promise = new Promise((resolve, reject) => {

    if (character == "a" || character == "b") {
        resolve("char is A or B")
    } else {
        reject("Char is not A or B")
    }
})

promise.then((resolveMsg) => {
    console.log(resolveMsg)
}).then(()=>{
    console.log('chained')
}).catch((rejectMsg)=>{
    console.log(rejectMsg)
})

// evaluate the promise using promise.then
// try changing the character to different letters to see if the promise.then is fired (resolve) or catch (reject) is fired. 


// How to relate this to callbacks?

// the .then is like a callback?