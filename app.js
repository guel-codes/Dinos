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

//Fetch  JSON
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
    sliceArray()
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

// Clear form from screen
function removeForm() {
    document.querySelector("#dino-compare").style.display = 'none'

}

//This this split the dino array into 2 halves and concatenate the human object in the middle
// function sliceArray(arrToSlice){
//     return arrToSlice.slice(0, 4).concat(getHumanData()).concat(arrToSlice.slice(4, 8))   
// }

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


// animal obj because this is taking in a new array with the human object and dino objects
function generateTiles(animalObj) {
    animalObj.forEach(function(dino){
        let tileDiv = document.createElement('div')
        tileDiv.className = 'grid-item'
        // creating a h2 tag for the tile
        let tile = document.createElement("h2")
        tile.innerHTML = `<h2>${dino.species}</h2>
        <img src="images/${dino.imagePath} alt = "picture of ${dino.species}">
        <h4>${dino.fact}</h4>`
        tileDiv.appendChild(tile)
        
        // creates the element on the page
        document.getElementById("grid").appendChild(tileDiv)
    })
}


// function generateDinoTiles(DinoObj) {
//     DinoObj.forEach(function(dino){
//         let tileDiv = document.createElement('div')
//         tileDiv.className = 'grid-item'
//         // creating a h2 tag for the tile
//         let tile = document.createElement("h2")
//         tile.innerHTML = `<h2>${dino.species}</h2>
//         <img src="images/${dino.imagePath} alt = "picture of ${dino.species}">
//         <h4>${dino.fact}</h4>`
//         tileDiv.appendChild(tile)
        
//         // creates the element on the page
//         document.getElementById("grid").appendChild(tileDiv)
//         return tileDiv
//     })
    
// }

// function generateHumanTile(getHumanData) {
//     let tileDiv = document.createElement('div')
//     tileDiv.className = 'grid-item'
//     // creating a h2 tag for the tile
//     let tile = document.createElement("h2")
//     tile.innerHTML = `<h2>${getHumanData().humanName}</h2>
//     <img src="images/${getHumanData().imagePath} alt = "picture of ${getHumanData().humanName}">`
//     tileDiv.appendChild(tile)
    
//     // creates the element on the page
//     document.getElementById("grid").appendChild(tileDiv)
//     return tileDiv
// }

// // loop through all 
// function fragDocAndAppend(dinoArray, getHumanData){
//     const fragment = document.createDocumentFragment()

//     for (let gridTile = 0 ; gridTile < 9; gridTile++){
//         if(gridTile === 5){
//             generateHumanTile(getHumanData())
//         }else
//             generateDinoTiles(dinoArray)
//     }
//     document.getElementById('grid').appendChild(fragment)
// }

// On button click, prepare and display infographic
let button = document.querySelector("#btn")

button.addEventListener("click", function() {
    getHumanData()
    removeForm()
    generateTiles(dinoArray)
    // generateDinoTiles(dinoArray)
    // fragDocAndAppend(dinoArray, getHumanData())
    compareHeight()

})
