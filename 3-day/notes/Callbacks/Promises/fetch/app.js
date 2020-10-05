
String.prototype.toJadenCase = function() {
    console.log(this.split(" ".array.forEach(element => {
        return element[0].toUpperCase()
    }))
}
  // this.split(" ").map(word => word.charAt(0).toUpperCase());

"How can mirrors be real if our eyes aren't real".toJadenCase();


// Asycronus Request
    // Requests that happen in the background 
    // use promises or callbacks to let the person know that request is finished

// XMLHttpRequet uses the callback function
// AJAX Function
// let request = new XMLHttpRequest()

// request.onload = function() {
//     console.log("Second")
// }

// request.open("GET", "http://www.omdbapi.com/?s=batman&apikey=e4d0cce7")
// request.send() // sending the request 

// console.log("FIRST")


// How to make this more modern? With promises?

// FETCH 
    // Calling the fetch library returns a promise 


// By default fetch will use GET http protocol. GET request unless specified
// fetch("http://www.omdbapi.com/?s=batman&apikey=e4d0cce7")
//     .then(response => response.json()) //Json returns another promise
//     .then(json => console.log(json)) 


// let postList = document.getElementById("postList")

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(posts => {
//     let postItems = posts.map(post => {
//         return `<li>${post.title}</li>`
//     })

//     postList.innerHTML = postItems.join('')

// })


// Post request with fetch

// https://reqres.in.api/users
fetch("https://reqres.in/api/users", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: "morpheus",
        job: 'leader'
    })
}).then(response => response.json())
.then(json => console.log(json))

