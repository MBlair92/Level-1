//Question #1:

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var numOfComputers = 0;
for (var i = 0; i < officeItems.length; i++ ){
    if (officeItems[i] === "computer"){
        numOfComputers++
    }
}
console.log ("the number of computers in this array is " + numOfComputers)

//Question #2:

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max")
    }
    else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max")
    }
  }

//   [2, 5, 435, 4, 3] // "The light is on"
// [1, 1, 1, 1, 3]   // "The light is on"
//  [9, 3, 4, 2]     // "The light is off"
var button = [1, 1, 1, 1, 3]
var sum = 0
for(let i = 0; i < button.length; i++){
    sum += button[i];
    console.log(sum)
    if(sum % 2 === 0){
        console.log('the light is off')
    }else{
        console.log('the light is on')
    }
}