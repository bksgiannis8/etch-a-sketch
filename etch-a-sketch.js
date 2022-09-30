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

const para = document.createElement("p");
const node = document.createTextNode("Click me to specify boxes");
para.appendChild(node);
button.appendChild(para);







button.addEventListener("click", () => {
    let newBoxes=prompt("Please enter number of boxes by row or column");
    document.body.removeChild(container)
    const container=document.createElement("div")
    document.body.appendChild(container);
    container.classList.add("container");
    for (let i=0; i<newBoxes; i++) {
        for (let j=0; j<newBoxes; j++) {
            let square = document.createElement('div');
            square.setAttribute("grid-column", j + " / span 1");
            square.setAttribute("grid-row", i + " / span 1");
            square.setAttribute("class", "square");
            container.appendChild(square);
            container.style.setProperty('grid-template-columns', 'repeat(' + newBoxes + ', 1fr)');
            container.style.setProperty('grid-template-rows', 'repeat(' + newBoxes + ', 1fr)');
        }       
    }
    
})
