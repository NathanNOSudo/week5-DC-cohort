// http://www.omdbapi.com/?s=batman&apikey=e4d0cce7

let firstSection = document.getElementById("firstSection")
let secondSection = document.getElementById("secondSection")
// let titles = document.getElementsByClassName("titles")

// create a new instance/Object for a new xmlHttpRequest
let titleRequest = new XMLHttpRequest()

function catalogueLoading(){
    // When the request is fulfilled the onload request is fired
    titleRequest.onload = function () {
        let result = JSON.parse(this.responseText)
        let liItems = result.Search.map((movie) => {
            return `
            <li>
            <img width=100px height=100px src=${movie.Poster}/>
            <label><a href="#" class="titles" onclick="getMovieDetails('${movie.imdbID}')">${movie.Title}</a></label>
            </li>`
        })
        firstSection.innerHTML = liItems.join("")
    }
}


catalogueLoading()

function getMovieDetails(imdb){
    console.log('test')
    
    
    // console.log(imdb)
    
    detailsRequest = new XMLHttpRequest()
    detailsRequest.onload = function() {
            let result = JSON.parse(this.responseText)
            let detailItems = `
                <li>
                <h2>${result.Title}</h2>
                <img width=auto height=200px src=${result.Poster}/>
                <h2>${result.Released}</h2>
                <h2>${result.Year}</h2>
                <h2>${result.Rated}</h2>
                `
                secondSection.innerHTML = detailItems
        }
    detailsRequest.open("GET", `http://www.omdbapi.com/?i=${imdb}&apikey=e4d0cce7`)
    detailsRequest.send()
    }
    

titleRequest.open("GET", "http://www.omdbapi.com/?s=batman&apikey=e4d0cce7")

titleRequest.send()




// Need to grab the imdb number and insert it into the link
// also need to attach the link to the 
// http://www.omdbapi.com/?i=insertSelectedimdbIDhere&apikey=e4d0cce7


// Need to change the tiles into links that call the link with the associated imdbid inserted into the link




// detailsRequest.onload = function () {
//     let detailsResult = JSON.parse(this.responseText)
//     let detailItems = detailsResult.Search.map((details) => {
//         return `
//         <label>${details.Title}</label>
//         <h3>${details.Year}</h3>
//         <h3>${details.Rated}</h3>
//         <h3>${details.Released}</h3>
//         <h3>${details.Director}</h3>
//         `
//     })

//     secondSection.innerHTML = detailItems.join("")
// }