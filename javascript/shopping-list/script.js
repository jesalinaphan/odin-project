function init() {
    const form = document.querySelector("form");
    form.addEventListener('submit', addToList);

    const list = document.querySelector("ul")

}

function addToList(event) {
    event.preventDefault()

    let item = document.getElementById("item")
    let list = document.querySelector("ul")

    let newItem = document.createElement("li")
    newItem.textContent = item.value

    let deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    deleteButton.id = "delete"

    deleteButton.addEventListener('click', () => list.removeChild(newItem))

    newItem.appendChild(deleteButton)
    list.appendChild(newItem)
    
    item.value = ""
}

init()