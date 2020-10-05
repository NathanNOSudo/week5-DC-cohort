let weatherDetails = document.getElementById("weatherDetails")
let locationInput = document.getElementById("locationInput")
let submitButton = document.getElementById("submitButton")
let currentLoc = document.getElementById("currentLoc")
let map = document.getElementById("map")



currentLoc.addEventListener("click", function(){
    if (navigator.geolocation) {
        // navigator.geolocation returns a geolocation object which can locate user's position
        navigator.geolocation.getCurrentPosition(getPosSuccess, getPosErr)
        
    } else {
        alert('geolocation not available?! Get a better browser!')
    }
})

function getPosSuccess(pos){
    var lat = pos.coords.latitude.toFixed(5)
    var lon = pos.coords.longitude.toFixed(5)
    var acc = pos.coords.accuracy.toFixed(1)
    console.log(`Location Found! ${lat} ${lon}`)
    getWeatherByLL(lat, lon)
}

function getPosErr(err){
    switch(err.code){
        case err.PERMMISSION_DENIED:
            alert("User denied the request for Geolocation")
            break;
        case err.POSITION_UNAVAILABLE:
            alert("Location information is unavailable")
            break;
        case err.TIMEOUT:
            alert("The request to get user location timed out.")
            break
        default:
            alert("An unkown error occurred.")
    }   
}


submitButton.addEventListener("click", function () {
    // getting value of location inputted to textbox
    let value = locationInput.value
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=c637a4f9f0032953045faaf5c7c90e37&units=imperial`
    getApiInformation(url)
})

_secretKey = "c637a4f9f0032953045faaf5c7c90e37"

function getWeatherByLL(lat, lon){
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${_secretKey}`
    getApiInformation(url)
}
 
function getApiInformation(url){
    console.log(url)
    fetch(url)
        // Parsing the server response to json
        .then(response => response.json())
        .then(data => {
            console.log()
            let literal = `
            <li>Max Temp: ${data.main.temp_max}</li>
            <li>Min Temp: ${data.main.temp_min}</li>
            <li>Pressure: ${data.main.pressure}</li>
            <li>City: ${data.name}</li>
            `
            weatherDetails.innerHTML = literal
            let iconID = data.weather[0].icon
            return iconID
        })
        .then(iconID => { 
            let iconImg = `<img src='${weatherIcon(iconID)}'/>`
            weatherDetails.insertAdjacentHTML("beforebegin", iconImg)
        })
        .catch(error => {
            weatherDetails.innerHTML = `Please enter a valid location`
        })
}

function weatherIcon(ID){    
    console.log(ID)
    return `http://openweathermap.org/img/wn/${ID}`
}





