// Create an "div" node:
const nodeDivCont = document.querySelector('#container');
const nodeBodyCont = document.querySelector('#body');


// variable created for the while loops
let i = 0;    
// count children of parent node


// creates the 16 x 16 grid
function add16Divs() {

    let temp = document.getElementById('container').childElementCount;
    console.log(temp);  
    //if container 64 x 64 was already created, remove it and create a new one.
    if(temp === 496){
        nodeDivCont.remove();
        console.log('nodeDivCont removed');
 // create a div container unter body
 nodeBodyCont.createElement("div");
 nodeBody.id = "container";

        while(i <256){
           

            // Create an "div" node:
            const node = document.createElement("div");
            node.className = "gridDiv";
            nodeDivCont.className = 'container';          
            document.getElementById("container").appendChild(node);
        i++;
    }     
    }
    else{while(i <256){
        // Create an "div" node:
        const node = document.createElement("div");
        node.className = "gridDiv";
        nodeDivCont.className = 'container';          
        document.getElementById("container").appendChild(node);
    i++;
}          
}
                          
}



// creates the 64 x 64 grid
function add64Divs() {
    let temp = document.getElementById('container').childElementCount;
    console.log(temp);   
            while(i <496){
                     // Create an "div" node:
                    const node = document.createElement("div");
                    node.className = "grid64Div";
                    nodeDivCont.className = 'container';
                    document.getElementById("container").appendChild(node);
            i++;
            }   
           

        }
