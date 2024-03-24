const container = document.querySelector('#container');
const promptBtn = document.querySelector('#prompt');
let opacity = 0;

promptBtn.addEventListener("click", () => requestGridSize());

function requestGridSize() {
    let num = prompt("Set the number of grids per side between 1-100:");
    while (!isValidInput(num)) {
        num = prompt("Invalid input. Set the number of grids per side between 1-100:");
    }
    printGrid(num);
}

function isValidInput(num) {
    if (num > 0 && num < 101 && num % 1 === 0) {
        return true;
    }
}

function printGrid(num) {
    resetGrid();
    for (let i = 0; i < num; i++) {
        const column = document.createElement("div");
        column.setAttribute('id', `column-${i}`);
        column.setAttribute('class', 'columns');
        for (let j = 0; j < num; j++) {
            const row = document.createElement('div');
            row.setAttribute('id', `row-${j}`);
            row.setAttribute('class', 'rows');
            column.appendChild(row);
            row.addEventListener("mouseenter", () => addSketch(row));
        }
        container.appendChild(column);
    }   
}

function addSketch(row) {
    row.setAttribute('class', 'rows coloured');
    let r = Math. floor(Math. random() * 256);
    let g = Math. floor(Math. random() * 256);
    let b = Math. floor(Math. random() * 256);
    row.style.cssText = `background: rgb(${r} ${g} ${b}); opacity: ${opacity}`;
    opacity += 0.1
    console.log(opacity);
}

function resetGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}
