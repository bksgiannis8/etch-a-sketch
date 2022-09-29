const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);


for (let i=0; i<16; i++) {
    for (let j=0; j<16; j++) {
        let square = document.createElement('div');
        square.setAttribute("grid-column", j + " / span 1");
        square.setAttribute("grid-row", i + " / span 1");
        square.setAttribute("class", "square");
        container.appendChild(square);
    }    
}

const boxes = document.getElementsByClassName('square');
for (const box of boxes) {
    box.addEventListener('mouseover', () => {
    console.log("mouseover");
    box.classList.add('permahover');
    });
};

const button = document.createElement("button");
button.classList.add("btn1");
document.body.insertBefore(button, container);

