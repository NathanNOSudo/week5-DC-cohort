let submitButton = document.getElementById("submitButton")
let emailInput = document.getElementById("emailInput")
let passwordInput = document.getElementById("passwordInput")

let request = new XMLHttpRequest()



submitButton.addEventListener("click", function(){
    let user = {
        email: emailInput.value,
        password: passwordInput.value
    }
    request.onload = function() {
        let parsedOrder = JSON.parse(this.responseText)
        console.log(parsedOrder)
    }
    request.open("POST", "https://reqres.in/api/register")
    request.setRequestHeader("Content-Type", "application/JSON")
    request.send(JSON.stringify.user)
})