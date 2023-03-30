var readlineSync = require('readline-sync');

// Welcome the player to the game
console.log("Welcome to Zombie Land!");

// Ask for the player's name and store it
const playerName = readlineSync.question("You have entered the world of the undead, What is your name?");

// Initialize the player's stats
let playerHP = 100;
const playerInventory = [];

// Define the possible enemies
const zombie = ["Joe", "Frank", "Sue", "Beth"];

// Define the minimum and maximum damage the player can deal
const minPlayerDamage = 10;
const maxPlayerDamage = 20;

// Define the minimum and maximum damage the enemy can deal
const minZombieDamage = 5;
const maxZombieDamage = 15;

// Define the chance of being attacked by an enemy (1 in 3 or 1 in 4)
const zombieChance = Math.random() < 0.75 ? 5 : 4;

while (true) {
  const userInput = readlineSync.keyIn("Enter 'w' to walk:");
  
  if (userInput === 'w') {
    // Determine if a wild enemy has appeared
    let randomChance = Math.floor(Math.random() * 4); // Generate a random number from 1 to 4
    if (randomChance === 1) {
      console.log("A zombie has appeared!");
      // Perform actions for the enemy encounter
      break; // Exit the loop to stop walking
    } else {
      console.log("You continue walking...");
    }
  } else {
    console.log("Invalid input. Please enter 'w'.");
  }
}


// // Define a function to handle walking
// function walk() {
//   console.log(`${playerName} is walking...`);

//   // Loop until an enemy appears
// }while (true) {
//     // Prompt the player to enter 'w' to walk
//     const userInput = readlineSync.keyIn("If your ready to enter press 'w' to walk.");
  

//     if (userInput.toLowerCase() === "w") 
//       // If an enemy appears
//       if (Math.floor(Math.random() * zombieChance) === 3) {
//         // An enemy appeared!
//         const zombie = zombies[Math.floor(Math.random() * zombie.length)];
//         console.log(`A wild ${zombie} appeared!`);}

        // Loop until the battle is over
        //  while (playerHP > 0 && zombieHP > 0) {
          // Prompt the player to attack or run
          const action = readlineSync.keyIn(playerName +"? Do you want to [a]ttack or [r}un? ", {limit: "ar"})

       if (action.toLowerCase() === "attack") {
            // Calculate the amount of damage the player will deal
            const playerDamage = Math.floor(Math.random() * (maxPlayerDamage - minPlayerDamage + 1)) + minPlayerDamage;
            console.log(`${playerName} attacks and deals ${playerDamage} damage to the ${zombie}!`);

            // Subtract the damage from the enemy's HP
            zombieHP -= playerDamage;
          } else {
            // The player chose to run; calculate a 50% chance of escaping
            if (Math.random() < 0.5) {
              console.log(`${playerName} managed to escape!`);
              console.log(`${playerName} couldn't escape!`);}
          

          // Check if the enemy has been defeated
          // while (zombieHP <= 0) {
            console.log(`${playerName} defeated the ${zombie}!`);

            // Add an item to the player's inventory
            const item = `Special item from ${zombie}`;
            playerInventory.push(item);
            console.log(`${playerName} found a ${item}!`);

            // Restore some of the player's HP
            playerHP = Math.min(playerHP + 25, 100);

            // Reset the enemy's HP for the next battle
            zombieHP = 100;
          }
            // Calculate the amount of damage the enemy will deal
            const zombieDamage = Math.floor(Math.random() * (maxZombieDamage - minZombieDamage + 1)) + minZombieDamage;
            console.log(`The ${zombie} attacks and deals ${zombieDamage} damage to ${playerName}!`);

            // Subtract the damage from the player's HP
            playerHP -= zombieDamage;

            // // Check if the player has been defeated
            if (playerHP <= 0) {
              console.log(`${player}`)}
