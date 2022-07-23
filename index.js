const sketchDiv = document.querySelector("#sketchDiv");

function createGrid(leftSideNumber, rightSideNumber){
    let squares = (leftSideNumber * rightSideNumber) - 1;
    for (let i = 0; i <= squares; i++){
        let diver = document.createElement("div");
        diver.classList.add("squareDivs"); 
        sketchDiv.appendChild(diver);
    };
}

createGrid(16, 16);

const boton = document.querySelector("#boton");

function addListenersForColoring (){
    const squareDivs = document.querySelectorAll(".squareDivs");

    squareDivs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.classList.add("colorHover");
            })
        }
    );
}

addListenersForColoring();

boton.addEventListener("click", () => {
    let leftSideNumber = parseInt(prompt("How many squares for left side?", 16));
    let rightSideNumber = parseInt(prompt("How many squares for right side?", 16));
    while (sketchDiv.lastElementChild) {
        sketchDiv.removeChild(sketchDiv.lastElementChild);
    }
    createGrid(leftSideNumber, rightSideNumber);
    addListenersForColoring();
});    
