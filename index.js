const sketchDiv = document.querySelector("#sketchDiv");

for (let i = 0; i <= 255; i++){
    let diver = document.createElement("diver");
    diver.classList.add("squareDivs"); 
    sketchDiv.appendChild(diver);
};

const squareDivs = document.querySelectorAll(".squareDivs");

squareDivs.forEach((div) => {

    div.addEventListener("mouseover", () => {
        div.classList.add("colorHover");
        })
    }
);
