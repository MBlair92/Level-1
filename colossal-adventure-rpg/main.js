var readlineSync = require('readline-sync');

//console must greet player with a message
console.log("Welcome to Zombie land")
var playerName = readlineSync.question('You have entered the world of the undead, if your ready to try to live another day, what is your name? ')
console.log(playerName)
var choice1 = readlineSync.keyIn("Hello " + playerName + "! Do you want to [w]alk, [p]rint your status or [q]uit? ", {limit: "wpq"})


let player = {
    playerName: playerName, 
    specialItems:  [],
    hp: 100 
}



let zombie = {
    zombieNames: ['joe', 'frank', 'sue', 'beth'], 
    zombieItems: ['axe', 'bat', 'nailfile', 'bottle'], 
    hp: 40,  
}


let isHuman = true
while(isHuman === true){
    if(choice1 === "w"){
        walking()
    }else if(choice1 === "q"){
        console.log("Player quit!")
        break
    }else if(choice1 === 'p'){
        console.log(person)
        break;
    }
}

function walking() {
    //use Math.random() to determine if an enemy appears 
    var randomAppearance = Math.floor(Math.random() * 3)
    // var randomChance = Math.floor(Math.random())


// if random is grater then 0.70 is true if less then false

     if(randomAppearance < 1) {
         console.log("No enemies have appeared")
     }else if(zombie.zombieNames.length <= 0) {
         console.log("There are no zombies left. ")
         isHuman = false
     }else if(randomAppearance == 1){
        zombieAppear()
 }
}



 //generate enemy function   
function zombieAppear() { 
    var randomZombie = Math.floor(Math.random() * 3)
    // console.log(randomZombie + 'has appeared!')
    console.log(zombie.zombieNames[randomZombie], "has appeared. ")
    // enemyArr[1]
    //(1)to randomize enemyarray, you can use math.floor and math.random 
    // var randomEnemy = enemyArr[Math.floor(Math.random() * enemyArr.length)]
    //(2) you can get the user to decide to attack or run by using readline.sync's keyIn method
    var choice2 = readlineSync.keyIn(playerName +"?  Do you want to [a]ttack or [r]un? ", {limit: "ar"})

  
    let willAttack = true
    while(willAttack === true){
       if(choice2 === "a"){
           playerAttack()
           break
        }else if(choice2 === "r"){
         run()
       }
    }

    }

    
    //if the user decides to attack, then we can call the attack function
function playerAttack() {
    let isAtttacking = true
    while(isAtttacking === true) {
        //randomize the amount of health points the player lose
        let randomPlayerHpLose = Math.floor(Math.random() * 100)
        
        //randomize the amount of health points the enemy lose
        let randomEnemyHpLose = Math.floor(Math.random() * 40)
        
        //subtract the random amount from the player hp 
        player.hp -= randomPlayerHpLose
        
        //subtract the random amount from the enemy 
        zombie.hp -= randomEnemyHpLose
        console.log(randomEnemyHpLose, "randomEnemyHpLose")
        console.log(zombie.hp, "zombie hp")
        console.log(randomPlayerHpLose, "randomPlayerHpLose")
        console.log(player.hp, "player.hp")
        break
       
        //create a conditional statement that will check if the playerHp and enemyHp is greater than 0 (is alive)
        //if this condition is true, console log the player and enemy hps (how much did they lose, what is their current hp)
        //if player hp is less than or equal to 0, console log player dies and use break or isAttacking = false
        //if enemy hp is less than or equal to 0, console log enemy is defeated and use break or isAttacking = false
        //remove the zombie from array when defeated and add their item to inventory
    }
}

function run (){
    //50% chance of escaping
    let escapeChance = Math.floor(Math.random() * 100)

    if(escapeChance > 50){
        console.log('You have escaped the Zombie')
        walking()
    }else if(escapeChance < 50){
        console.log('You were unable to escape.')
        playerAttack()
    }
}

    //if the user decides to run, then we can call the run function

