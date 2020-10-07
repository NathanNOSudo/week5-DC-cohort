let weatherList = document.getElementById("weatherList")
let cityTextBox = document.getElementById("cityTextBox")
let cityButton = document.getElementById("cityButton")

cityButton.addEventListener("click", function() {
    let varURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityTextBox.value}&appid=7a4e4f6a3f4efcdb0badfcf426957c65&units=imperial`

    fetch(varURL)
    .then(response => response.json())
    .then(weatherPosts => {
        console.log(weatherPosts)
        let description = convertArray(weatherPosts.weather[0].description)
        let weatherVar = `<ul>
                            <p>City: ${weatherPosts.name}</p>
                            <p>Description: ${description}
                            <p>Minimum Temperature: ${weatherPosts.main.temp_min} </p>
                            <p>Maximum Temperature: ${weatherPosts.main.temp_max} </p>
                            <p>Feels like: ${weatherPosts.main.feels_like}</p>
                            </ul>`
        weatherList.innerHTML = weatherVar
        }
    ).catch(message => {
        let statement = "Not a city!"
        errorList.innerHTML = statement
    })

function convertArray(string){
    let someVar = string.split(" ")
    let titleLetters = []
    for(let i = 0; i < someVar.length; i++){
        let firstLetter = someVar[i][0].toUpperCase()
        let secondLetter = someVar[i].slice(1)
        titleLetters.push(`${firstLetter}${secondLetter}`)

    }
return titleLetters.join(" ")
}
// I have no clue
})