

let orderList = document.getElementById('orderList')
let submitButton = document.getElementById('submitButton')
let emailInput = document.getElementById("emailInput")
let orderInput = document.getElementById("orderInput")

let allOrders, newOrder, emailOrderSort, deleteOrderByEmail

let orderLink = 'https://dc-coffeerun.herokuapp.com/api/coffeeorders/'
let emailOrderLink = 'https://dc-coffeerun.herokuapp.com/api/coffeeorders/emailaddress'



let allOrdersRequest = new XMLHttpRequest()

allOrdersRequest.onload = function () {
    allOrders = JSON.parse(this.responseText)
    let orderValuesArr = Object.values(allOrders)
    for (let i = 0; i < orderValuesArr.length; i++) {
        orders = `
        <li> <strong>Email Address:</strong> ${orderValuesArr[i].emailAddress}</li>
        <li> <strong>Coffee Order:</strong> ${orderValuesArr[i].coffee} </li>
        `
        orderList.insertAdjacentHTML('beforeend', orders)
    }
}


// thing is either delete 
// thing is also find by email

// why does putting the open and send in the onload method break it?
allOrdersRequest.open("GET", orderLink)
allOrdersRequest.send()

submitButton.addEventListener("click", function () {
    createNewOrder(emailInput.value, orderInput.value)
    console.log('button fired')
})

function createNewOrder(email, order) {
    let newOrderRequest = new XMLHttpRequest()

    newOrderRequest.onload = function () {
        console.log(this.responseText)
    }

    console.log(`text ${this.responseText}`)

    newOrderRequest.open("POST", orderLink)
    newOrderRequest.setRequestHeader("Content-Type", "application/json")

    let orderDetails = {
        coffee: order,
        email: email
    }
    console.log(orderDetails)
    newOrderRequest.send(JSON.stringify.orderDetails)
}


let filterBox = document.getElementById("filterBox")
let filterButton = document.getElementById("filterButton")
function filter(email) {

}


    // @d: {
    //     _id: "5e309fe35ea42d040089e3b6",
    //     coffee: "ss",
    //     emailAddress: "@d",
    //     __v: 0
    // },
// function findOrder(){

// }

    // `<li>(email => email.emailAddress)</li>
    //     <li>Order: ${orderValuesArr.map(order => order.coffee)}</li>`
    // <li>Order: ${orderValuesArr.map(order => order.coffee)}</li>
    // `

    // taskList.insertAdjacentHTML('beforeend')



    // let order = `<li> Email Address: ${orderValuesArr.map(function(element) {
    //     orderList.insertAdjacentHTML('beforeend'
    //     , (`Email: ${element.emailAddress}
    //         Order: ${element.coffee}
    //     `)}))
    // }))

// You are the owner of a coffee shop and you want to manage the orders you receive from the customers.

// Create an app which list all the coffee orders on a web page.You can also type in the email address in a textbox and search for a particular coffee order by email address.You should also be able to delete the coffee order.You should also be able to add a new coffee order.

// Coffee Order Web API Documentation
// Get all orders:
// https://dc-coffeerun.herokuapp.com/api/coffeeorders/

// Create new order:
// https://dc-coffeerun.herokuapp.com/api/coffeeorders/
// Params: emailAddress(string), coffee(string)

// Get order by email:
// https://dc-coffeerun.herokuapp.com/api/coffeeorders/emailaddress

// Delete order by email:
// https://dc-coffeerun.herokuapp.com/api/coffeeorders/insertEMAILADDRESSHERE