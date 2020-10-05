// https://jsonplaceholder.typicode.com/users

let request = new XMLHttpRequest()

function userLoading(){
    request.onload = function() {
        let result = JSON.parse(this.responseText)
        console.log(result)
    }
}

userLoading()

request.open('GET', "https://jsonplaceholder.typicode.com/users")

request.send()