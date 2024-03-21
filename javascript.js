const container = document.querySelector('#container');

function generateGrid(num){
    /* columns */
    for (let i = 0; i < num; i++) {
        const  column = document.createElement("div");
        column.setAttribute('id', `column-${i}`);
        column.setAttribute('class', 'columns');
        for (let j = 0; j < num; j++) {
            const row = document.createElement('div');
            row.setAttribute('id', `row-${j}`);
            row.setAttribute('class', 'rows');
            column.appendChild(row);
        }
        container.appendChild(column);
    }
}

generateGrid(16);