const wrapper = document.querySelector(".wrapper");
const playButton = document.querySelector(".play-button");
const levelSelectHtml = document.getElementById("game-level");

playButton.addEventListener("click", function (){
    console.clear();
    wrapper.innerHTML = "";
    wrapper.classList.add("active");
    const level = parseInt(levelSelectHtml.value);   

    numGenerator(level);
})

//FUNCTIONS

//create a square element to add on DOM
//number -> (number) the number to set inside of the square element
//levelChoise -> (number) number given by the level choise
//return -> (object) the square element
function createSquare (number, levelChoise) {
    const square = document.createElement("div");
    square.classList.add("square");
    if (levelChoise === 100) {
        square.classList.add("easy")
    } else if ( levelChoise === 81) {
        square.classList.add("normal");
    } else if (levelChoise === 49) {
        square.classList.add("hard");
    }
    square.innerHTML = (number);
    return square;
}

//add square with a number inside
//levelChoise -> (number) number given by the level choise
function numGenerator (levelChoise) {
    for (let i = 1; i < (levelChoise + 1); i++) {
        const element = [i];
        const theSquare = createSquare(element, levelChoise);
        theSquare.addEventListener("click", onSquareClick)
        wrapper.append(theSquare); 
    }
}


//on clic add class blue to element
function onSquareClick() {
    this.classList.add("blue");
    console.log(this.innerHTML);
}

