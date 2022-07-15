const mainDiv = document.querySelector("#mainDiv");

for (let i = 0; i <= 255; i++){
    let div = document.createElement("div");
    div.id = "squareDivs"; 
    mainDiv.appendChild(div);
};

const squareDivs = document.querySelector("#squareDivs");

squareDivs.addEventListener("mousemove", () => {
    squareDivs.classList.add("colorHover");
})