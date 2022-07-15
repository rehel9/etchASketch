const mainDiv = document.querySelector("#mainDiv");

for (let i = 0; i <= 255; i++){
    let diver = document.createElement("diver");
    diver.classList.add("squareDivs"); 
    mainDiv.appendChild(diver);
};

const squareDivs = document.querySelectorAll(".squareDivs");

squareDivs.forEach((div) => {

    div.addEventListener("mouseover", () => {
        div.classList.add("colorHover");
        })
    }
);
