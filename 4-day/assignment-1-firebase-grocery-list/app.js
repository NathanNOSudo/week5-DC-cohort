// Create a grocery list app which allows you to add different categories.Here are list of requested features. 

// * User should be able to add the grocery category(Walmart, HEB, Fiesta, Sams Club etc)(name and address)

//     * User should be able to view all grocery categories // show all categories by default

//         * User should be able to delete grocery categories

// HARD MODE 1

//     * Items must be stored in Firebase database

// HARD MODE 2

//     * Add user registration and authentication

//         * Allow user to add items to the grocery categories

//             * Allow the user to login and then store the categories for that user.This means each category in Firebase will be associated with a particular user. 

let itemTextBox = document.getElementById("itemTextBox")
let addItemButton = document.getElementById("addItemButton")
let itemList = document.getElementById("itemList")
let filterDropDown = document.getElementById("filterDropDown")



let database = firebase.database()

let rootRef = database.ref()

rootRef.on('value', (snapshot)=> {
    
    let snapshotValue = snapshot.val()

    mapItemsFunction(snapshotValue)



    // < a class="dropdown-item" href = "#" > Store 1</a >
})

function mapItemsFunction(values){
    console.log('mapitemsfired')
    let tasksArr = []
    let keyArr = []
    for (let key in values) {
        let task = values[key]
        tasksArr.push(task)
        keyArr.push(key)
    }
    console.log(keyArr)

    let liItems = tasksArr.map((task, index) => {
        return `
        <li>${task.storeName}</li> <button class="removeButton" onclick="removeTask('${keyArr[index]}')">remove</button>`
    })
    // <button class="removeButton" onclick="${rootRef.task.remove()}">remove</button>
    console.log(liItems)
    itemList.innerHTML = liItems.join("")
    
    
    let dropDownItems = tasksArr.map((item, index) => {
        return `<a class="dropdown-item" onclick="filter('${item.storeName}')"> ${item.storeName} </a>`
    })

    filterDropDown.innerHTML = dropDownItems.join("")
}

function removeTask(key){
    console.log(key)
    console.log('remove fired')
    rootRef.child(key).remove()
    // itemList.removeChild(event.parentElement)
}

function filter(key){
    console.log('filter fired')
    console.log(key)
    itemList.innerHTML = key
    // let arrPosition = null

    // itemList.innerHTML = `
    // ${dropdownItemsClass[arrPosition].childNodes}
    // <button> 
    // console.log(dropdownItemsClass[arrPosition].childNodes) <button>`
}


addItemButton.addEventListener("click", () => {
    let newStoreName = itemTextBox.value
    rootRef.push({
        storeName: newStoreName
    })
})