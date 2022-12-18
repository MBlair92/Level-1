const readline = require("readline-sync");
const name = readline.question("What is your name? ");

const enter = ('Welcome to your Doom ' + name + ' Try to escape if you can!')  
console.log(enter)

const options = ['Put your hand in the hole and see what you find?', 'Find the Key to survie?', 'Try and get through the door?'+ ''] ///array of choices in the beginning of the game
let afterDeath = ""   ///this happens after death-leave blank
const death = "Time is up your soul is mine now"  //message that appears when you die
const won = "You get to live another day and keep your soul :)"  ///message that appears if you win


while(!afterDeath){    ///while not dead
    let optionsList = readline.keyInSelect(options)
    if(optionsList === 0){      ///your first option which should result in dea
        console.log("You have choosen to put your hand in the hole and now have been bitten by a deadly snake, " + death)
        afterDeath = death;
    }else if(optionsList === 1){
        console.log("Congrats you found the key, " + won)
        afterDeath = won
    }else if (optionsList === 2){
        console.log('Clawing through the door isnt going to work, but you being desperate to live and be free makes me smile!')
    }else{
        console.log('This is fun would you like to be brave and try again?')
    }

}