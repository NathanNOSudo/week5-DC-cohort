// HTTP REQUEST
    // - HEADERS - Tell the server what we are sending an in which format -- Application JSON
    // - BODY - tell the server about the content
        // Sending JSON - need to use raw data so we can write it ourselves
// Post - https://island-bramble.glitch.me/orders
// Information (BODY) to send should be in JSON Format
    // name
    // coffeeName
    // total
    // size

// Postman APP - Performs get, send requests
    // browser's cannot perform post requests
    // 

// Get request can be run by typing out the url in the browser
    // Same URL, so by default the request is a get request
// GET - https://island-bramble.glitch.me/orders

let request = new XMLHttpRequest()

// callback function
request.onload(function(){
    
})
request.open("POST", "https:/reqres.in/api/users")
// set the headers to JSON to indicate that we are sending JSON
request.setRequestHeader("Content-Type", "application/json") // whats the application thing?

let user = {
    name: "Mary Doe",
    job: "Developer"
}

console.log(user)
console.log(JSON.stringify.user)

request.send(JSON.stringify.user)