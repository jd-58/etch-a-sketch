const gridContainer = document.getElementById("gridContainer");
let gridArray = [];

//let gridAmount = 256;  starting value of 16x16
/*for (var i = 1; i<= gridAmount; i++) {
    gridArray.push(i)
} */
// creating an array with the numbers 1-gridAmount. Need to
// edit later, as this will need to be updated if the user
//  wants to be able to select grid size.

  function createGrid(gridAmount) {
    let id = 1;
for (let i=1; i<= gridAmount; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.setAttribute("id", "gridNum" + id);
    gridDiv.setAttribute("class", "grid")
    gridDiv.style.color = "black"
    gridContainer.appendChild(gridDiv);
    id++;
}
}

createGrid(16);


