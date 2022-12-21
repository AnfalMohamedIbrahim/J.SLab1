var div= document.getElementById("div");
// --------a
var img=document.createElement("img");

// ---------b
img.setAttribute("src","./23030441 - Copy.jpg");
// console.log(img);

// ---------c
div.appendChild(img);


// ----------d
// the number of the nodelist of the div is 1 because i append the img in ----
alert("the Number of the childeren of the Div is "+div.childNodes.length);


// ----------e
div.removeChild(img);

// After removing the childeren is 0 
alert("the Number of the childeren of the Div is "+div.childNodes.length);

// -------Testing the insertBefore function------------
// var img2 =document.createElement("img");
// img2.setAttribute("src","./7667892.jpg")
// div.appendChild(img2);
// this make the img2 be before the img1 as they have the same parent Node which is 
// the div ............
// div.insertBefore(img2,img);

// Error Uncaught DOMException: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.
// even i appended it in the div !!!
// div.insertBefore(img,div);
// document.insertBefore(img,div);

// the childeren of the div [Nodelist] 
// console.log(div.childNodes)

// the div is the parent node!!!!
// console.log(img.parentNode);


// console.log(document.childNodes);

