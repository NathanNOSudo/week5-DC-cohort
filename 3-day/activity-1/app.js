function getMovies(moviesDownloaded){
    let movies = []
    let request = new XMLHttpRequest()
    request.onload = function(){

        let response = JSON.parse(this.responseText)
        // response.Search contains the movies as an array
        movies = response.Search
        moviesDownloaded(movies)
    }
    request.open("GET", "http://www.omdbapi.com/?s=batman&apikey=e4d0cce7")
    request.send()
    
    // return movies // Moving to onload function doesn't do anything
}

// let movieList = getMovies()
getMovies(function(movies){
    console.log(movies)
})

// console.log(movieList)

// // getCounter updates the counter variable every second
// function getCounter(counterUpdated) {

//     let counter = 0 
//       window.setInterval(function() {
//        counter++
//        counterUpdated(counter)
//     },1000)
// }

// // The getCounter function is called here but how do we get the value of the updated counter
// // pass a callback function to the getCounter function below and get the updated counter value and then display it on the console 
// getCounter(function(counter){
//   console.log(counter)
// })


function getCounter(updatedCounterValue) {
    let counter = 0
    window.setInterval(function () {
        counter++
        updatedCounterValue(counter)
    }, 1000)
}

getCounter(function (counter) {
    console.log(counter)
})




// GetCounter(updtedCounterValue) is the original function 
// The next action called is the set interval function
// Counter is incremented here, but called getCounter instantly would return 0 because the counter wouldn't have the time to update
// So....
// The next function called is the getCounter function with a parameter of an anonymous function - This is the callback function
// The function of the callbck prints counter to the console

// Okay, so where to call it?
// Inside the original function, after the thing that takes tiem to execute, call the parameter with the callback parameter

// 