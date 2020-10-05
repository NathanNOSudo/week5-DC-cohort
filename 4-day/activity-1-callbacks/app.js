function getWeather(callback) {
    let weatherURL =
        "https://api.openweathermap.org/data/2.5/weather?q=houston&appid=c637a4f9f0032953045faaf5c7c90e37&units=imperial";


    weatherObj = {}
    fetch(weatherURL)
        .then(response => response.json())
        .then(weatherInfo => {
            weatherObj = weatherInfo
            weatherInfo()
            callback(weatherInfo)
        });
}


// calling the initial 
getWeather(function(weatherInfo){
    console.log(weatherInfo)
}); // what change is required here to get the weather from getWeather function above and then display on the console. Hint - Callbacks




// let multiply = function(a,b){
//     return a*b
// }

// function add(a,b){
//     return a+b
// }

// function calc(num1, num2, callback){
//     return callback(num1, num2)
// }

// console.log(calc(2,3,'add'))


// callbacks - just calling the already initialized function as a parameter
// just like passing in an integer, or string, or name function
// passing 