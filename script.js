let borderPixels = 1;
// the grid size asked to the user:

let pixelSide = prompt("Choose a grid between 1 and 64", 32);

// takes the max and minimal values to between 1 and 64:
function handleChange() {
    if (pixelSide < 1) pixelSide = 1;
    if (pixelSide> 64) pixelSide= 64;
  }
  handleChange()
  
let gridSize = document.getElementById('gridSize');


// the total quantidy of boxes in the grid : side x side
let totalPixels = pixelSide * pixelSide;
// the pixels in each box of the grid

// the total  side of the square in pixels: 
let widthSqr =560;
// let widthSqr = boxPixels*(pixelSide^(1/2))+borderPixels*2*((pixelSide^(1/2))-1)+(borderPixels*2);
// the total  side of the square in pixels: 
let heightSqr = widthSqr;
let  boxPixels= -((borderPixels*2*((pixelSide^(1/2))-1)+(borderPixels*2) - widthSqr)/ (pixelSide^(1/2)))
// console.log(borderPixels);
// console.log(pixelSide);
// console.log(totalPixels);
// console.log(boxPixels);
// console.log(widthSqr);
// console.log(heightSqr);

// if 16 x 16 clicked, refresh page: 
function refreshPage(){
    window .location.reload();   
    
}
// Create an "div" node:
let nodeH2 = document.querySelector('#h2');
// variable created for the while loops
let i = 0;    

// creates the 16 x 16 grid
function add16Divs() { 
    document.getElementById('p1').innerText = `${pixelSide} x ${pixelSide} grid`;
    // Create an "div" container under H2:    
    nodeH2 = document.createElement("div");
        nodeH2.className = "container";
        nodeH2.id = 'container';  
        nodeH2.setAttribute('style', `width:${widthSqr}px;height: ${widthSqr}px;`)        
        document.getElementById("h2").appendChild(nodeH2);
        // nodeH2.setAttribute('style', 'textAlign: center;')
        // div.setAttribute('style','color: blue; background: white;');

    while(i <totalPixels){
        
        // Create an "div" under container:
        const node = document.createElement("div");
        node.className = "gridDiv";    
        node.setAttribute('style', `width:${boxPixels}px; height:${boxPixels}px;`);         
        // div.setAttribute('style','color: blue; background: white;');
        document.getElementById("container").appendChild(node);
    i++;
    }
}
add16Divs()