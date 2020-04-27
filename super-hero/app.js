// grabs the div from the DOM
let movieListDiv = document.getElementById("movieListDiv")
// grabs the a link form the DOM
let detailedLink = document.getElementById("detailedLink")
// grabs the detailed div 
let detailedMovieDiv = document.getElementById("detailedMovieDiv")

// APIKEY
let apiKey = "d02f4c5a"


// url with api key to get all batman movies
let batmanURL = `http://www.omdbapi.com/?s=batman&apikey=${apiKey}`


// Reuqest New GET POST
let reqBatman = new XMLHttpRequest()
reqBatman.open("GET", batmanURL)
// Listener Event To Get All BatMan Movies
reqBatman.addEventListener("load", () => {

    let movies = JSON.parse(event.currentTarget.responseText)


    let movieItems = movies.Search.map(movie => {
        return `<div>   
                    <img onclick="detailedFeature('${movie.imdbID}')" src='${movie.Poster}'/> 
                    <h2>${movie.Title}</h2>
                </div>`
    })
    movieListDiv.innerHTML = movieItems.join("")
})

// make the actual request...
reqBatman.send()

