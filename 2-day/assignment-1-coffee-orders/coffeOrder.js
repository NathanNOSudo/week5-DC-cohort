let coffeOrders = document.getElementById("coffeOrders");
let emailInput = document.getElementById("emailInput");
let orderInput = document.getElementById("orderInput");
let submitButton = document.getElementById("submitButton");

// request
let request = new XMLHttpRequest();

let orderLink = 'https://dc-coffeerun.herokuapp.com/api/coffeeorders/';
let emailOrderLink = 'https://dc-coffeerun.herokuapp.com/api/coffeeorders/emailaddress';

// set onload function to show orderitems that are already existing 
// use keys from json file to display values in the browser.

request.onload = function ( ) {
    let orderItems = Object.values(JSON.parse(this.responseText))
    orderItems.map(function(ele) {
        coffeOrders.innerHTML += 
        `
        <li><strong> Email Address: </strong>${ele.emailAddress}</li>
        <li><strong> Coffee Order: </strong>${ele.coffee}</li>
        <br>
        `
    })
}
request.open("GET", orderLink);
request.send();



submitButton.addEventListener("click", function() {
    let email = emailInput.value 
    let order = orderInput.value 
    let postRequest = new XMLHttpRequest()
    postRequest.open("POST", orderLink)

    let orderDetails = {
        coffee: order,
        emailAddress: email
    }

    postRequest.setRequestHeader("Content-Type", "application/json");
    postRequest.send(JSON.stringify(orderDetails));

    postRequest.onload = function () {
        let newCoffee = JSON.parse(this.responseText)
        console.log(newCoffee);
        coffeOrders.innerHTML += `
            <li><strong> Email Address: </strong>${ele.emailAddress}</li>
            <li><strong> Coffee Order: </strong>${ele.coffee}</li>

        `
    }
}

)

/* #####################################################################################  */
let filterBox = document.getElementById("filterBox")
let filterButton = document.getElementById("filterButton")

// need to replace emailaddress with the input emailaddress

let filterRequest = new XMLHttpRequest()

filterButton.addEventListener("click", function(){
    filterRequest.onload = function(filterCoffee){
        coffeOrders.innerHTML = `
            <li> <strong>Email Address:</strong> ${filterCoffee.emailAddress}</li>
            <li> <strong>Coffee Order:</strong> ${filterCoffee.coffee} </li>
        `
    }

    filterRequest.open("GET", `https://dc-coffeerun.herokuapp.com/api/coffeeorders/${filterBox.value}`)
    filterRequest.send()

})