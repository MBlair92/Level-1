const input = require('readline-sync')

const userName = input.question('What is your name? ')
console.log('Hi!' + userName)

let num1 = input.question('Please pick your first number ')
let num2 = input.question('Please pick your second number ')
const calc = input.keyIn ("Would you like to (a)dd, (s)ubtract, (d)ivide, or (m)ultiply? ")

if (calc === 'a'){
    console.log("Your result is: " + add())
} else if (calc === 's'){
    console.log("Your result is: " + subtract())
} else if (calc === 'd'){
    console.log ("Your result is: " + divide())
} else if (calc === 'm'){
   console.log ("Your result is: " +  multiply())
}

function add(){
    return num1 + num2 
}


function add(){
    return num1 - num2 
}


function divide(){
    return num1 / num2 
}


function multiply(){
    return num1 * num2 
}

