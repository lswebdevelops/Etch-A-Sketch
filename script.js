function myFunction() {

    // Create an "div" node:
    const node = document.createElement("div");
    
    // Create a text node:
    const textnode = document.createTextNode("Water");
    
    // Append the text node to the "li" node:
    node.appendChild(textnode);
    
    // Append the "li" node to the list:
    document.getElementById("container").appendChild(node);
    }
    let i = 0;
   
        function myFunction() {
             while(i <4){

            // Create an "div" node:
            const node = document.createElement("div");
            // add style to the div
            
            node.setAttribute('style','color: blue; background: yellow;border:solid 1px firebrick; width: 15px; height:15px');
            // node.setAttribute('style','color: blue; background: yellow;border:solid 1px firebrick; width: 50px; height:50px');
// 
            // Create a text node:
            const textnode = document.createTextNode("");
            
            // Append the text node to the "li" node:
            node.appendChild(textnode);
            
            // Append the "li" node to the list:
            document.getElementById("container").appendChild(node);
            i++;
            }
              console.log(i);
             
    }
