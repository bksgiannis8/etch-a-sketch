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
    //creates draw space
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i=0; i<size*size; i++) {
        //creates square elements and appoints them to alement container
        let square = document.createElement('div');
        container.appendChild(square);
        square.addEventListener('mouseover', () =>{
            square.style.backgroundColor = "black";
        })
        function clearSpace() {
            button.addEventListener('click', e => {
                square.style.backgroundColor = "white";
            })
        }
        clearSpace();
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
    // make button reset the draw area and make new one
    resetSpace() 
})

function resetSpace() {
    let number = prompt("Please enter new space size");
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    createSpace(number); // call the createGrid function here and pass the number they entered as the argument. 
}

createSpace(16);




