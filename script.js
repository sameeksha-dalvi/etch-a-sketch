
const container = document.querySelector(".container");

createGrid(16);

function createGrid(size) {

    if (container.hasChildNodes()) {
        container.textContent = "";
    }

    for (let i = 1; i <= size; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        container.appendChild(row);
        for (let j = 1; j <= size; j++) {
            const col = document.createElement("div");
            col.setAttribute("class", "col");
            row.appendChild(col);
        }

    }

}



container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "gray";
});


const clearBtn = document.querySelector("#clear-grid");

clearBtn.addEventListener("click", (e) => {
    const colNodeList = document.querySelectorAll(".col");

    for (let i = 0; i < colNodeList.length; i++) {
        colNodeList[i].style.backgroundColor = "white";
    }

});


const changeGridSize = document.querySelector("#change-grid-size");

changeGridSize.addEventListener("click", (e) => {
    let gridSize = parseInt(prompt("Please enter the new grid size :"));

    if (isNaN(gridSize)) {
        alert("Please enter valid number.");
        return false;
    }

    if (gridSize > 100) {
        alert("Maximum grid size limit is 100");
        return false;
    }
    createGrid(gridSize);

});

