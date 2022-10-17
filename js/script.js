const wrapper = document.querySelector(".wrapper");
const playButton = document.querySelector(".play-button");
const levelSelectHtml = document.getElementById("game-level");

console.log(levelSelectHtml);

playButton.addEventListener("click", function (){
    const level = parseInt(levelSelectHtml.value);   
    wrapper.innerHTML = "";

    //to insert the square element with random number on the DOM and change color on click
    wrapper.classList.add("active");
    for (let i = 1; i < (level + 1); i++) {
        const element = [i];
        const theSquare = createSquare(element);
        
        theSquare.addEventListener("click", onSquareClick)
        wrapper.append(theSquare); 
    }
})

//FUNCTIONS

//create a square element to add on DOM
//number -> (number) the number ti set inside of the square element
//return -> (object) the square element
function createSquare (number) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.innerHTML = (number);
    return square;
}

//on clic add class blue to element
function onSquareClick() {
    this.classList.add("blue");
    console.log(this.innerHTML);
}

