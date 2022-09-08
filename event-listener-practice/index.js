document.getElementById("square").addEventListener("mouseover",function(){
    console.log(square.style.backgroundColor = "blue")
})

document.getElementById("square").addEventListener("mousedown", function(){
    console.log(square.style.backgroundColor = "red")
})

document.getElementById("square").addEventListener("mouseup", function(){
    console.log(square.style.backgroundColor = "yellow")
})

document.getElementById("square").addEventListener("dblclick", function(){
    console.log(square.style.backgroundColor = "green")
})

window.addEventListener("wheel", function(event){
    square.style.backgroundColor = "orange" 
})

document.addEventListener("keydown", function(event){
    if(event.key =="b"){
        square.style.backgroundColor = "blue"
    } else if(event.key == "r"){
        square.style.backgroundColor = "red"
    } else if(event.key == "y"){
        square.style.backgroundColor = "yellow"
    } else if(event.key == "g"){
        square.style.backgroundColor = "green"
    }else if(event.key == "o"){
        square.style.backgroundColor = "orange"
    }
})
