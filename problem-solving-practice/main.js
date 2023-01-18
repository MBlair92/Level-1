// function largestNum(numbers){
//     let largest = numbers[0];
//     for(let i = 0; i < numbers.length; i ++){
//         if(numbers[i] > largest){
//             largest = numbers[i];
//         }
//         return largestNum
//     }
    
// }

// function largestNum(num){
//     let largest = largest.sort(num)
//     return 
// }
// test data
function largest(a){
    let num = 0 
    for(let i = 0 ; i < a.length; i ++){
        if(a[i] >= num){
          num = a[i]
        }
        
    }
    return num
}
console.log(largest([6, 13, 250, 3])) // => 250
console.log(largest([3, 5, 2, 8, 1])) // => 8
console.log(largest([-13, 40, 3, 0, 19, 22])) // => 40

function


// test data
console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!")) 
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")) 
console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))  