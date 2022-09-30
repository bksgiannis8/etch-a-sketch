const container = document.createElement("div"); // create container element
container.classList.add("container");   // Add container class
document.body.appendChild(container);   //append container div to body

const button = document.createElement("button"); //Create button element
button.classList.add("btn1");                    //Add btn1 class
document.body.insertBefore(button, container);   //Append button as a child to container

const para = document.createElement("p");
const node = document.createTextNode("Click me to specify boxes");
para.appendChild(node);
button.appendChild(para);


function createSpace(size) {
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let j=0; j<16; j++) {
        let square = document.createElement('div');
        container.appendChild(square);
        square.addEventListener('mouseover', e =>{
        square.style.backgroundColor = "white";
        square.classList.add("permahover");
        })
    }   
}

const boxes = document.getElementsByClassName('square');
for (const box of boxes) {
    box.addEventListener('mouseover', () => {
    console.log("mouseover");
    box.classList.add('permahover');
    });
};









button.addEventListener("click", () => {
    let number=prompt("Please enter number of boxes by row or column");
    document.body.removeChild(container)
    const container=document.createElement("div")
    document.body.appendChild(ontainer);
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


