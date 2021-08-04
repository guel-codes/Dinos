// Create Dino Constructor
function Dino(species, dinoWeight, dinoHeight, dinoDiet, where, when, fact) {
    this.species = species
    this.dinoWeight = dinoWeight
    this.dinoHeight = dinoHeight
    this.dinoDiet = dinoDiet
    this.where = where
    this.when = when
    this.fact = fact
    this.compareWeight = function (humanWeight){
        weightDifference = dinoWeight - humanWeight
        return `There is a ${Math.abs(weightDifference)} pound difference between you and this animal`
    }
    this.compareHeight = function (humanHeightFeet, humanHeightInches){
        totalHeight  = Number(humanHeightFeet * 12) + Number(humanHeightInches)
        heightDifference = Math.abs(dinoHeight - totalHeight)
        return `There is a ${heightDifference} inch difference between you and this animal`
    }
    this.compareDiet = function (humanDiet){
        if (dinoDiet == humanDiet.toLowerCase()){ //The form uses capital diet but the JSOn has it all lower case
            let result = 'Yay you both eat the same types of food'
            return result
        }else{
            let result = `Unlike you this Dino is a ${dinoDiet}`
            return result
        }
        // return result
    }
    
}

// Create Human Object
function Human(species, humanHeightFeet, humanHeightInches, humanWeight, humanDiet, fact) {
    this.species = species
    this.humanHeightFeet = humanHeightFeet
    this.humanHeightInches = humanHeightInches
    this.humanWeight = humanWeight
    this.humanDiet = humanDiet
    this.fact = fact
}

//Fetch  JSON
fetch('dino.json')
    .then(response => response.json()) //get response from url
    .then(data => {  //get data
        getDinoArray(data.Dinos) //pass array of Dino objects into the getDinoArray function (line 34)
    })
    .catch(error => console.log(`There was a data fetch error: ${error}`));

// Creating Dino Array from fetched data
function getDinoArray(dinos) {
    dinoArray = []
    dinos.forEach((dino) => {
        newDinoObj = new Dino(dino.species,dino.weight, dino.height, dino.diet, dino.where,dino.when,dino.fact)
        dinoArray.push(newDinoObj)
        
    });
    return dinoArray
}

// Use IIFE to get human data from form
function getHumanData() {
    return(function() {
        humanName = document.querySelector('#name').value;
        species = "Human"
        humanHeightFeet = document.querySelector('#feet').value;
        humanHeightInches = document.querySelector('#inches').value;
        humanWeight = document.querySelector('#weight').value;
        humanDiet = document.querySelector('#diet').value;
        fact = ""
        //create a new human object from the data
        const human = new Human(species, humanHeightFeet, humanHeightInches, humanWeight, humanDiet,fact)
        return human
    })();
}


// Clear form from screen
function removeForm() {
    document.querySelector("#dino-compare").style.display = 'none'

}


// animal obj because this is taking in a new array with the human object and dino objects
function generateTiles(animalObj,human) {
    animalObj.splice(4,0,human)

    for (let index =0; index < 9; index ++){
        animal = animalObj[index]
        let tileDiv = document.createElement('div')
        tileDiv.className = 'grid-item'

        // creating a h2 tag for the tile
        if (index === 4){
            animal.species = document.querySelector('#name').value
            humanWeight = document.querySelector('#weight').value
            humanHeightFeet = document.querySelector('#feet').value
            humanHeightInches= document.querySelector('#inches').value
            humanDiet = document.querySelector('#diet').value
            let tile = document.createElement("h2")
            tile.innerHTML = `<h2>${animal.species}</h2>
            <img src="images/human.png" alt = "picture of ${animal.species}"/>`
        
            tileDiv.appendChild(tile)
        }else if (index === 8){ // for the pigeon

            let tile = document.createElement("h2")
            tile.innerHTML = `<h2>${animal.species}</h2>
            <img src="images/${animal.species.toLowerCase()}.png" alt = "picture of ${animal.species}"/>
            <h4>${animal.fact}</h4>`
            tileDiv.appendChild(tile)

        }else{

            //set up random facts
            const factNumber = Math.floor(Math.random() * 4) // This will select a random number between 0 and 3
            let genericFact = animal.fact
            let aCW = animal.compareWeight(humanWeight)
            let aCH = animal.compareHeight(humanHeightFeet, humanHeightInches)
            let aCD = animal.compareDiet(humanDiet)
            facts = [genericFact,aCW, aCH, aCD]

            let tile = document.createElement("h2")
            tile.innerHTML = `<h2>${animal.species}</h2>
            <img src="images/${animal.species.toLowerCase()}.png" alt = "picture of ${animal.species}"/>
            <h4>${facts[factNumber]}</h4>`
             
            
            tileDiv.appendChild(tile)
        }
        // creates the element on the page
        document.querySelector("#grid").appendChild(tileDiv) 
    }
}

// On button click, prepare and display infographic
let button = document.querySelector("#btn")

button.addEventListener("click", function() {
    getHumanData()
    removeForm()
    generateTiles(dinoArray,getHumanData())
})
