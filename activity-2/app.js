// https://cat-fact.herokuapp.com/facts
let catFacts = document.getElementById("catFacts")

let request = new XMLHttpRequest()

request.onload = function () {
    let result = JSON.parse(this.responseText)
    let liItems = result.all.map((fact) => {
        if(fact.user) {
        return `<li>
            <label>${fact.text}</label>
            <li> <label>${fact.user.name.first ? fact.user.name.first : 'none'}</label>
            <label>${fact.user.name.last}</label></li>
        </li><hr>`
        }
    })

    catFacts.innerHTML = liItems.join("")
        console.log(liItems)
}

// all - instead of search

request.open("GET", "https://cat-fact.herokuapp.com/facts")

request.send()

