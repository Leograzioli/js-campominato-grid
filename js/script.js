const wrapper = document.querySelector(".wrapper");
const playButton = document.querySelector(".play-button");
const levelSelectHtml = document.getElementById("game-level");

playButton.addEventListener("click", function (){
    console.clear();
    wrapper.innerHTML = "";
    wrapper.classList.add("active");
    const level = parseInt(levelSelectHtml.value);   

    //to insert the square element with random number on the DOM and change color on click
    for (let i = 1; i < (level + 1); i++) {
        const element = [i];
        const theSquare = createSquare(element);
        
        theSquare.addEventListener("click", onSquareClick)
        wrapper.append(theSquare); 
    }
})

//FUNCTIONS

//create a square element to add on DOM
//number -> (number) the number to set inside of the square element
//return -> (object) the square element
function createSquare (number) {
    const level = parseInt(levelSelectHtml.value);
    const square = document.createElement("div");
    square.classList.add("square");
    if (level === 100) {
        square.classList.add("easy")
    } else if ( level === 81) {
        square.classList.add("normal");
    } else if (level === 49) {
        square.classList.add("hard");
    }
    square.innerHTML = (number);
    return square;
}

//on clic add class blue to element
function onSquareClick() {
    this.classList.add("blue");
    console.log(this.innerHTML);
}

