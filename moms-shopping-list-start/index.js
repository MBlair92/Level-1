
// below I created a variables that targets those elements
// on the document(HTML page) so I can refrence in my JS functioncality
const form = document.getElementById('add-todo')
const myList = document.getElementById("list")//ul


form.addEventListener("submit", (e) =>{
    e.preventDefault()
    console.log("triggered")
    addItem()
})
var addItem =function(){
    
    //target the input form value
    var input = document.getElementById('title').value
    input.value = ""
    var newListItem = document.createElement("li")
    newListItem.innerHTML = input
    myList.appendChild(newListItem)

    // .append and .prepend
   
    

    const itemName = document.createElement("div")
    itemName.textContent = input


    const editButton = document.createElement("button")
    editButton.textContent= "edit"
    newListItem.append(editButton)

    const xButton = document.createElement("button")
    xButton.textContent = "x"
    newListItem.appendChild(xButton)

    xButton.addEventListener("click" , deleteItem)
    function deleteItem(){
        newListItem.remove()   
        
    }



} 






