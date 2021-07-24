// Create Dino Constructor
function Dino(species,dino_weight,dino_height,dino_diet,where,when,fact){
    this.species = species
    this.dino_weight = dino_weight
    this.dino_height = dino_height
    this.dino_diet = dino_diet
    this.where = where
    this.when = when
    this.fact = fact
}
//Adding Human Constructor
function Human(name, human_height_feet, human_height_inches,human_weight,human_diet){
    this.name = name
    this.human_height_feet = human_height_feet 
    this.human_height_inches = human_height_inches
    this.human_weight = human_weight
    this.human_diet = human_diet
}

// Create Dino Objects
// fetch("dino.json")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const Triceratops = new Dino('Triceratops',13000,114,'herbavor','North America','Late Cretaceous','First discovered in 1889 by Othniel Charles Marsh')
const TRex = new Dino('Tyrannosaurus Rex',11905,144,'carnivor','North America','Late Cretaceous','The largest known skull measures in at 5 feet long.')
const Anklyo = new Dino('Triceratops',10500,55,'herbavor','North America','Late Cretaceous','Anklyosaurus survived for approximately 135 million years.')
const pigeon = new Dino('Pigeon',0.5,9,'herbavor','World Wide','Holocene','All birds are living dinosaurs.')


    // Create Human Object
const human = new Human('Miguel',5,8,190,'omnivor')

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1 HEIGHT ?
    // NOTE: Weight in JSON file is in lbs, height in inches. 
function compare_height(human_height, dino_height){
    return
}
    
    // Create Dino Compare Method 2 WEIGHT ?
    // NOTE: Weight in JSON file is in lbs, height in inches.
function compare_weight(human_weight, dino_weight){
    return
}
    
    // Create Dino Compare Method 3 DIET?
    // NOTE: Weight in JSON file is in lbs, height in inches.
function compare_diet(human_diet, dino_diet){
    return
}

    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
