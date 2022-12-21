var header =document.getElementById("header");
var lists = document.querySelectorAll("li");
console.log(lists);

// console.dir(lists)

lists.forEach(list=>{
    console.log(list);
    list.style.listStyle="circle";
});

var parentDivCenter = document.getElementsByClassName("center");
console.log(parentDivCenter[0].parentElement);
// console.log(parentDivCenter[0].childNodes);

// as they are in the same node which is the body////////////
parentDivCenter[0].parentElement.insertBefore(header,parentDivCenter[0])

// to make the photo in the right /////
header.style.textAlign ="right";

// to create the new img in the body we can also use insertAfter() after the center div //////
var newImg=document.createElement("img");
newImg.setAttribute("src","./dom.jpg");
parentDivCenter[0].parentElement.appendChild(newImg);




