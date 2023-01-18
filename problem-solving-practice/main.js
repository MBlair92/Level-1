// // //1.)Write a function that takes an 
// // array of numbers and returns
// //  the largest (without using Math.max())
// function largest(a){
//     let num = 0 
//     for(let i = 0 ; i < a.length; i ++){
//         if(a[i] >= num){
//           num = a[i]
//         }
        
//     }
//     return num
// }
// console.log(largest([6, 13, 250, 3])) // => 250
// console.log(largest([3, 5, 2, 8, 1])) // => 8
// console.log(largest([-13, 40, 3, 0, 19, 22])) // => 40


//2.) Write a function that takes an array
//  of words and a character and returns
// //  each word that has that character present.
// function lettersWithStrings(letterArr, b){
//     let words = letterArr[0]   
//     for(let i = 0; i < letterArr.length; i++){
//         if(letterArr[i].includes(b)){
//             words = letterArr[i]
//             console.log(words)
//         }
//     }

// }
// test data
// console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!")) 
// console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")) 
// console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))  

// 3.)Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
let divisible = false;
function isDivisible(num1, num2){
    if (num1 % num2 === 0){
        divisible = true
        console.log(divisible)
    } else {
        divisible = false
        console.log(divisible)
    }
    
}


// test data
console.log(isDivisible(4, 2)) // => true
console.log(isDivisible(9, 3)) // => true
console.log(isDivisible(15, 4)) // => false

