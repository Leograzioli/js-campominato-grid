const wrapper = document.querySelector(".wrapper");
const playButton = document.querySelector(".play-button");
const levelSelectHtml = document.getElementById("game-level");

playButton.addEventListener("click", function (){
    console.clear();
    wrapper.innerHTML = "";
    wrapper.classList.add("active");
    const level = parseInt(levelSelectHtml.value);   

    elementGenerator(level);
})

//FUNCTIONS

//based on the user choise set the level of the game
//level -> (number) number given by the level choise
//return -> (string)
function levelSelector(level) {
    let selected = "";
    if (level === 100) {
       selected = "easy";
    } else if (level === 81) {
       selected = "normal";
    } else if (level === 49) {
        selected = "hard";
    }
    return selected 
}

//create a square element to add on DOM
//number -> (number) the number to set inside of the square element
//levelChoise -> (number) number given by the level choise
//return -> (object) the square element
function createSquare (number, levelChoise) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.classList.add(levelSelector(levelChoise))
    square.innerHTML = (number);
    return square;
}

//add square with a number inside
//levelChoise -> (number) number given by the level choise
function elementGenerator (levelChoise) {
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