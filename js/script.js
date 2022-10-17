const easyLevel = 100;
const numberGenerate = addRdnNumberToArray(easyLevel);
const wrapper = document.querySelector(".wrapper");
const playButton = document.querySelector(".play-button");

playButton.addEventListener("click", function (){

    //to insert the square element with random number on the DOM and change color on click
    wrapper.classList.add("active");
    for (let i = 0; i < numberGenerate.length; i++) {
        const element = numberGenerate[i];
        const theSquare = createSquare(element);
        
        theSquare.addEventListener("click", onSquareClick)
        
        wrapper.append(theSquare); 
    }
})


//FUNCTIONS

//generate a random number between min and max parameters 
//min -> (number) the min number to generate
//max -> (number) the biggest number to generate
//return -> (number)
function rndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//create an array with random numbers 
//arrayLength -> (number) number of numbers un the array
//return -> (array)
function addRdnNumberToArray(arrayLength) {
    const arrayNumbers = [];
    while (arrayNumbers.length < arrayLength) {
        const rdnNum = rndNumber(1, arrayLength);
        if (!arrayNumbers.includes(rdnNum)) {
            arrayNumbers.push(rdnNum);
        }
    }
    return arrayNumbers;
}

//create a square element to add on DOM
//number -> (number) the number ti set inside of the square element
//return -> (object) the square element
function createSquare (number) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.classList.add("d-none")
    square.innerHTML = (number);
    return square;
}


function onSquareClick() {
    this.classList.add("blue");
    console.log(this.innerHTML);
}

