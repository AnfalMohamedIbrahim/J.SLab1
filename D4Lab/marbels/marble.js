var marbles=document.querySelectorAll("img");
// console.log(marbles);
var parentDiv = document.getElementById("div");
var shineMarble = document.getElementById("shine");
// console.log(shineMarble);
var i=0

marbles.forEach(marble=>{
//  console.log(marble);
 marble.addEventListener("mouseover",move);
 marble.addEventListener("mouseleave",stop);
});
console.log(marbles[0].src);
function moving(){
              marbles.forEach(moveMarble=>{
                 moveMarble.src="./marble3.jpg"; 
                 if(moveMarble.src="./marble3.jpg"){

                     moveMarble.src="./marble1.jpg"         
                 }  
                 moveMarble.src="./marble3.jpg"; 
              })
  }

function move(){
 play=setInterval(function(){
    moving();
 },1000);
  
}
function stop(){
clearInterval(play)
}

// marbles.forEach(marble=>{
// //  console.log(marble);
// //  marble.addEventListener("mouseover",move);
// });
// setInterval(move,1000);
// move();
// function move(){   
//     console.log(shineMarble);
    
//     //   do {
//     //     console.log(marbles[i]);
//     //     i++;
//     //     marbles[i].parentNode.insertAfter(shineMarble,marbles[i]);
//     //   } while (i!=0);
// //  for(var i=0;;i++){
// // // console.log(marbles[i].parentNode); 




               
// // }
// }

// for(var i=0; i<marbles.length;i++){
// console.log(marbles[i].parentNode);  

               
// }

// marbles.forEach(marble => {
//     // console.log(marble);
//     marble.onmouseover(function(){
//         for(var i=0; i<marble.length;i++){
//             // console.log(marbles[i]);
//             // parentDiv.replaceChild(marbles[i])
//             var randomNumber=Math.floor( Math.random()* 3) +1;
//             console.log(randomNumber);
//         }
//     })
// });

// console.log(parentDiv.parentNode);