// https://cat-fact.herokuapp.com/facts

let request = new XMLHttpRequest()

request.addEventListener("load", function () {
    let result = JSON.parse(this.responseText)

    for (let i = 0; i < result.all.length; i++) {
        console.log(result.text)
        if (result.all[i].user) {
            console.log(result.all[i].user.name.first)
            // console.log(result.all[i].user.name.first.last)
        }
    }
})

request.open("GET", "https://cat-fact.herokuapp.com/facts")

request.send()
