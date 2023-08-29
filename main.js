const gridContainer = document.getElementById("gridContainer");


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
        gridDiv.setAttribute("class", "grid");
        gridDiv.style.color = "black";
        gridDiv.addEventListener('mouseover', changeGridColor)
        gridContainer.appendChild(gridDiv);
        id++;

}
}



createGrid(16);
function changeGridColor(e) {
    let r = Math.random() * 256
    let g = Math.random() * 256
    let b = Math.random() * 256
    var randomColor = "rgba(" + r + "," + g + "," + b + "1" + ")"; 
    String(randomColor)
    Object.assign(e.target.style, {
        backgroundColor : randomColor });
}
/*let gridArray = document.getElementsByClassName("grid");
for (let i=1; i<= gridArray.length; i++) {
    currentGridNumber = "gridNum" + i;
    String(currentGridNumber);
    let gridPixel = document.getElementById(currentGridNumber);
    console.log(gridPixel)
    // gridPixel.addEventListener("mouseenter", changeColor);
}
// gridNum1.addEventListener("mouseenter", gridNum1.style.backgroundColor = "red")

*/
