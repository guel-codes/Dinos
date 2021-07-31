// Create Dino Constructor
function Dino(species, dinoWeight, dinoHeight, dinoDiet, where, when, fact, imagePath) {
    this.species = species
    this.dinoWeight = dinoWeight
    this.dinoHeight = dinoHeight
    this.dinoDiet = dinoDiet
    this.where = where
    this.when = when
    this.fact = fact
    this.imagePath = imagePath
}

// Create Human Object
function Human(name, humanHeightFeet, humanHeightInches, humanWeight, humanDiet) {
    this.name = name
    this.humanHeightFeet = humanHeightFeet
    this.humanHeightInches = humanHeightInches
    this.humanWeight = humanWeight
    this.humanDiet = humanDiet
    this.imagePath = imagePath
}

// Create Dino Objects
let url = 'dino.json'
fetch(url)
    .then(response => response.json()) //get response from url
    .then(data => {  //get data
        getDinoArray(data.Dinos) //pass array of Dino objects into the getDinoArray function (line 34)
    })
    .catch(error => console.log(`There was a data fetch error: ${error}`));

// Creating Dino Array from fetched data
function getDinoArray(dinos) {
    dinoArray = []
    dinos.forEach((dino) => {
        newDinoObj = new Dino(dino.species,dino.weight, dino.height, dino.diet, dino.where,dino.when,dino.fact,dino.image)
        dinoArray.push(newDinoObj)
        
    });
    console.log(dinoArray)
    return dinoArray
}


// Use IIFE to get human data from form
function getHumanData() {
    return(function() {
        humanName = document.querySelector('#name').value;
        humanHeightFeet = document.querySelector('#feet').value;
        humanHeightInches = document.querySelector('#inches').value;
        humanWeight = document.querySelector('#weight').value;
        humanDiet = document.querySelector('#diet').value;
        humanFact = " " // human object does not take in a fact
        imagePath = 'images/human.png'
        
        //create a new human object from the data
        const human = new Human(humanName, humanHeightFeet, humanHeightInches, humanWeight, humanDiet, imagePath)
        return human
    })();
}

function removeForm() {
    document.querySelector("#dino-compare").style.display = 'none'

}

// Create Dino Compare Method 1 HEIGHT ?
// NOTE: Weight in JSON file is in lbs, height in inches. 
function compareHeight() {
    let Feet = getHumanData().humanHeightFeet
    let Inches = getHumanData().humanHeightInches
    totalHumanHeight = Number((Feet * 12)) + Number(Inches)
    console.log(totalHumanHeight)
}

// Create Dino Compare Method 2 WEIGHT ?
// NOTE: Weight in JSON file is in lbs, height in inches.[]
function compareWeight(humanWeight, dinoWeight) {
    weightDifference = dinoWeight - humanWeight
    console.log(`You are ${weightDifference} pounds less than this dino`)
}

// Create Dino Compare Method 3 DIET?
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareDiet(humanDiet, dinoDiet) {
    return
}


// Generate Tiles for each Dino in Array
// function generateTiles() {
//     // creating a div 1
//     let applesDiv = document.createElement("div")
//     applesDiv.className = "grid-item"

//     // creating a h2 tag with the word "apples" as text
//     let apples = document.createElement("h2")
//     apples.innerText = "Apples"

//     applesDiv.appendChild(apples)

//     // creates the element on the page
//     document.getElementById("grid").appendChild(applesDiv)
// }

function generateTiles(animalObj) {
    animalObj.forEach(function(dino){
        let tileDiv = document.createElement('div')
        tileDiv.className = 'grid-item'

        // creating a h2 tag with the word "apples" as text
        dino.imagePath
        let tile = document.createElement("h2")
        tile.innerHTML = `<h2>${dino.species}</h2>
        <img src="images/${dino.imagePath}">
        <h4>${dino.fact}</h4>`
        tileDiv.appendChild(tile)

        //create the human element and place in center

        // creates the element on the page
        document.getElementById("grid").appendChild(tileDiv)
        
        const dinoGrid = document.getElementById('grid');
        dinoGrid.style.display = 'flex'
    })
}




// On button click, prepare and display infographic
let button = document.querySelector("#btn")

button.addEventListener("click", function() {
    getHumanData()
    removeForm()
    generateTiles(dinoArray)
    compareHeight()
})
