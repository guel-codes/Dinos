// Create Dino Constructor
function Dino(species,dinoWeight,dinoHeight,dinoDiet,where,when,fact,imagePath){
    this.species = species
    this.dinoWeight = dinoWeight
    this.dinoHeight = dinoHeight
    this.dinoDiet = dinoDiet
    this.where = where
    this.when = when
    this.fact = fact
    this.imagePath = imagePath
}

// Create Dino Objects
const Triceratops = new Dino('Triceratops',13000,114,'herbavor','North America','Late Cretaceous','First discovered in 1889 by Othniel Charles Marsh','images/triceratops.png')
const TRex = new Dino('Tyrannosaurus Rex',11905,144,'carnivor','North America','Late Cretaceous','The largest known skull measures in at 5 feet long.','images/tyrannosaurus rex.png')
const Anklyo = new Dino('Anklyosaurus',10500,55,'herbavor','North America','Late Cretaceous','Anklyosaurus survived for approximately 135 million years.','images/anklyosaurus.png')
const Brachio = new Dino('Brachiosaurus',70000,372,'herbavor','North America','Late Jurassic','An asteroid was named 9954 Brachiosaurus in 1991.','images/brachiosaurus.png')
const Stego = new Dino('Stegosaurus',11600,79,'herbavor','North America, Europe, Asia','Late Jurassic to Early Cretaceous','The Stegosaurus had between 17 and 22 seperate places and flat spines.','images/stegosaurus.png')
const Elasmo = new Dino('Elasmosaurus',16000,59,'carnivor','North America','Late Cretaceous','Elasmosaurus was a marine reptile first discovered in Kansas.','images/elasmosaurus.png')
const Pteranodon = new Dino('Pteranodon',44,20,'carnivor','North America','Late Cretaceous','Actually a flying reptile, the Pteranodon is not a dinosaur.','images/pteranodon.png')
const Pigeon = new Dino('Pigeon',0.5,9,'herbavor','World Wide','Holocene','All birds are living dinosaurs.','images/pigeon.png')

    // Create Human Object
function Human(name, humanHeightFeet, humanHeightInches,humanWeight,humanDiet){
    this.name = name
    this.humanHeightFeet = humanHeightFeet 
    this.humanHeightInches = humanHeightInches
    this.humanWeight = humanWeight
    this.humanDiet = humanDiet
}

    // Use IIFE to get human data from form
function getHumanData(){
    (function getUserResults() {
        humanName = document.querySelector('#name').value;
        humanHeightFeet = document.querySelector('#feet').value;
        humanHeightInches = document.querySelector('#inches').value;
        humanWeight = document.querySelector('#weight').value;
        humanDiet = document.querySelector('#diet').value;
        
        //create a human object from the data
        const human = new Human(humanName,humanHeightFeet,humanHeightInches,humanWeight,humanDiet)
        console.log(human)

    })();
}

    // Create Dino Compare Method 1 HEIGHT ?
    // NOTE: Weight in JSON file is in lbs, height in inches. 
function compareHeight(humanHeightFeet, humanHeightInches, dinoHeight){
    totalHumanHeight = Number((humanHeightFeet * 12)) + Number(humanHeightInches)
    totalDinoHeight = dinoHeight
    heightDifference = totalDinoHeight - totalHumanHeight
    console.log('compared height')

}

    // Create Dino Compare Method 2 WEIGHT ?
    // NOTE: Weight in JSON file is in lbs, height in inches.[]
function compareWeight(humanWeight, dinoWeight){
    weightDifference = dinoWeight - humanWeight
    console.log(`You are ${weightDifference} pounds less than this dino`)
}

    // Create Dino Compare Method 3 DIET?
    // NOTE: Weight in JSON file is in lbs, height in inches.
function compareDiet(humanDiet, dinoDiet){
    return
}

function removeForm(){
    document.querySelector("#dino-compare").style.display = 'none'
}

    // Generate Tiles for each Dino in Array
function generateTiles(dinoInfo, humanInfo){
    return
}

        // Add tiles to DOM


// On button click, prepare and display infographic
let button = document.querySelector("#btn")

button.addEventListener("click", function(){
    getHumanData()
    removeForm()
    generateTiles()
})
