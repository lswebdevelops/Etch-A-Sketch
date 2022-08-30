let borderPixels = 1;
// the grid size asked to the user:
let pixelSide = prompt("give the side of the grid", 16);
// the total quantidy of boxes in the grid : side x side
let totalPixels = pixelSide * pixelSide;
// the pixels in each box of the grid

// the total  side of the square in pixels: 
let widthSqr =560;
// let widthSqr = boxPixels*(pixelSide^(1/2))+borderPixels*2*((pixelSide^(1/2))-1)+(borderPixels*2);
// the total  side of the square in pixels: 
let heightSqr = widthSqr;
let  boxPixels= -((borderPixels*2*((pixelSide^(1/2))-1)+(borderPixels*2) - widthSqr)/ (pixelSide^(1/2)))
console.log(borderPixels);
console.log(pixelSide);
console.log(totalPixels);
console.log(boxPixels);
console.log(widthSqr);
console.log(heightSqr);

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
    document.getElementById('p1').innerText = "16 x 16 grid";
    // Create an "div" container under H2:    
    nodeH2 = document.createElement("div");
        nodeH2.className = "container";
        nodeH2.id = 'container';          
        document.getElementById("h2").appendChild(nodeH2);
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