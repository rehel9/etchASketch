const mainDiv = document.querySelector("#mainDiv");

for (let i = 0; i <= 256; i++){
    let div = document.createElement("div");
    div.classList.add("squareDivs"); 
    mainDiv.appendChild(div);
};