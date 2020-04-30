// HTTP REQUEST 
   // - HEADERS - Tell the server what we are sending and in which format  
   // - BODY - Tell the server about the content


let request = new XMLHttpRequest() 
request.onload = function() {
    console.log(this.responseText)
}

// POST : https://reqres.in/api/users 

// https://lake-bramble.glitch.me/orders
// POST 
// name String 
// coffeeName String 
// total Double 
// size String

request.open("POST","https://reqres.in/api/users")
// set the headers to JSON to indicate that we are sending JSON 
request.setRequestHeader("Content-Type","application/json")

let user = {
    name: "Mary Doe", 
    job: "Developer"
 }

 console.log(user)
 console.log(JSON.stringify(user))

 // we are converting an object to string representation 
 // so we can send it across to the API as a body of the request 
 request.send(JSON.stringify(user))