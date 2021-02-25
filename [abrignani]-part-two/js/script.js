
let petName = prompt("Name your pet.");
    console.log(prompt);

let choiceMax = 6;    
let happiness = 0;
let energy = 0;
for (let choice = 0; choice < choiceMax; choice++) {
    let pick = (prompt("feed, pet, or walk?"));
    let happy = 1;
    let reallyHappy = 2;
    let tired = 1;
    let ready = 2;  

    if (pick === "feed") {
        energy += ready;
    } 

    if (pick === "pet") {
        happiness += happy;
    }
         
    if (pick === "walk") {
        happiness += reallyHappy; 
    }

    if (pick === "walk") {
        energy -= tired; 
    }

    if (energy === -1) { 
        alert("Not enough energy to enjoy a walk.") 
    }

    while (energy === -1) {
        happiness -= reallyHappy;
        energy += tired;
    }
}

console.log(petName);
console.log(happiness);
console.log(energy);
console.log(petName + " has " + happiness + " happiness and " + energy + " energy.");