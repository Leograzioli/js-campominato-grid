const easyLevel = 100;
const wrapper = document.querySelector(".wrapper");
const playButton = document.querySelector(".play-button");

playButton.addEventListener("click", function (){

    //to insert the square element with random number on the DOM and change color on click
    wrapper.classList.add("active");
    for (let i = 1; i < (easyLevel + 1); i++) {
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
    square.classList.add("d-none")
    square.innerHTML = (number);
    return square;
}

//on clic add class blue to element
function onSquareClick() {
    this.classList.add("blue");
    console.log(this.innerHTML);
}

