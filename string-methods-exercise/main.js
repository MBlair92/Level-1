// var name = "Blair"

// var uppercaseBlair = name.toUpperCase()
// console.log(uppercaseBlair)
// var lowercaseBlair = uppercaseBlair.toLowerCase()
// console.log(lowercaseBlair)

// returnFirstHalf("Hello") // => "He"
// returnFirstHalf("Hello World") // => "Hello"

function capAndLow(){
var string = "BLaIr"
var capped = string.toUpperCase()
console.log(capped)
var lowered = string.toLowerCase()
console.log(lowered)
var joined = capped.concat(lowered)
console.log(joined)
}
capAndLow('BLaIr')




function findMiddleIndex(str){
    if(str.length % 2 == 1){
        var rounded = Math.floor(str.length / 2)
        return rounded
    }while(str.length % 2 == 0){
        return str
    }
}
console.log(findMiddleIndex("Hello"))///tests
console.log(findMiddleIndex("Hello World"))//tests

function returnFirstHalf (str){
    if(str.length % 2 == 1){
        return str.slice(0, str.length / 2)
    }
        return str 
}
console.log(returnFirstHalf("Hello"))
console.log(returnFirstHalf("Hello World"))

function capitilizeAndLowercase(word){
    return word.slice(0, Math.floor(word.length/2)).toUpperCase()
    + word.slice(Math.floor(word.length)/2).toLowerCase()
  }
  console.log(capitilizeAndLowercase('Hello World'))

