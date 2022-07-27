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

const boton = document.querySelector("#boton");

boton.addEventListener("click", () => {
    let leftSideNumber = parseInt(prompt("How many squares for left side?", 16));
    if (leftSideNumber > 100){
        return alert("The limit is 100!!");
    }
    let rightSideNumber = parseInt(prompt("How many squares for right side?", 16));
    if (rightSideNumber > 100){
        return alert("The limit is 100!!");
    }
    while (sketchDiv.lastElementChild) {
        sketchDiv.removeChild(sketchDiv.lastElementChild);
    }
    sketchDiv.classList.remove("grid");
    sketchDiv.setAttribute("style", `display: grid; grid-template-columns: repeat(${leftSideNumber}, 1fr)`); 
    createGrid(leftSideNumber, rightSideNumber);
    addListenersForColoring();
});    
