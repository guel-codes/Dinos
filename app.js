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

// Create Dino Objects
// fetch("dino.json")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const Triceratops = new Dino('Triceratops',13000,114,'herbavor','North America','Late Cretaceous','First discovered in 1889 by Othniel Charles Marsh')
const TRex = new Dino('Tyrannosaurus Rex',11905,144,'carnivor','North America','Late Cretaceous','The largest known skull measures in at 5 feet long.')
const Anklyo = new Dino('Anklyosaurus',10500,55,'herbavor','North America','Late Cretaceous','Anklyosaurus survived for approximately 135 million years.')
const Brachio = new Dino('Brachiosaurus',70000,372,'herbavor','North America','Late Jurassic','An asteroid was named 9954 Brachiosaurus in 1991.')
const Stego = new Dino('Stegosaurus',11600,79,'herbavor','North America, Europe, Asia','Late Jurassic to Early Cretaceous','The Stegosaurus had between 17 and 22 seperate places and flat spines.')
const Elasmo = new Dino('Elasmosaurus',16000,59,'carnivor','North America','Late Cretaceous','Elasmosaurus was a marine reptile first discovered in Kansas.')
const Pteranodon = new Dino('Pteranodon',44,20,'carnivor','North America','Late Cretaceous','Actually a flying reptile, the Pteranodon is not a dinosaur.')
const Pigeon = new Dino('Pigeon',0.5,9,'herbavor','World Wide','Holocene','All birds are living dinosaurs.')

    // Create Human Object
//Adding Human Constructor
function Human(name, human_height_feet, human_height_inches,human_weight,human_diet){
    this.name = name
    this.human_height_feet = human_height_feet 
    this.human_height_inches = human_height_inches
    this.human_weight = human_weight
    this.human_diet = human_diet
}

    // Use IIFE to get human data from form
    // Need to add an eventListener for the click, out this compareClick() function 
    //in the infographic display below and take the 'onClick' out of the HTML code
    
function compareClick(){
    (function getUserResults() {
        human_name = document.getElementById('name').value;
        human_height_feet = document.getElementById('feet').value;
        human_height_inches = document.getElementById('inches').value;
        human_weight = document.getElementById('weight').value;
        human_diet = document.getElementById('diet').value;
        
        const human = new Human(human_name,human_height_feet,human_height_inches,human_weight,human_diet)

        console.log(human)
    })();
}
    // Create Dino Compare Method 1 HEIGHT ?
    // NOTE: Weight in JSON file is in lbs, height in inches. 
function compare_height(human_height, dino_height){
    return
}
    
    // Create Dino Compare Method 2 WEIGHT ?
    // NOTE: Weight in JSON file is in lbs, height in inches.[]
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
