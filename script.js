
const container = document.querySelector(".container");


for(let i = 1 ; i <= 16; i++){
    const row = document.createElement("div");
    row.setAttribute("class","row");
    container.appendChild(row);
    for( let j = 1; j <= 16 ; j++){
        const  col = document.createElement("div");
        col.setAttribute("class","col");
        row.appendChild(col);
    }
    
}




