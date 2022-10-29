var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var alphabet = alphabet.split("")

function together (people, alphabet){
    const newArr = []
    
    for (i = 0; i < people.length; i++){
        newArr.push(people[i].concat())
        for ( j = 0; j < alphabet.length; j++){
            newArr.push(alphabet[j])
        }
    }
    return newArr
}
console.log(together(people, alphabet))