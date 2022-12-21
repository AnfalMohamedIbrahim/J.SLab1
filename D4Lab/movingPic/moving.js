var toRightImg= document.getElementById("img-Sright-Eleft");
var toLeftImg=document.getElementById("img-Sleft-Eright");
var topImg=document.getElementById("img-top");
var moved = 1;


function start(){
    console.log("im here");

   startMoving= setInterval(function(){

        toRightImg.style.left =(moved-15)+"px";
        toLeftImg.style.right =(moved+1100)+"px";
        topImg.style.top=(moved-1)+"px";

        moved++;

    },50);   
}

function stop(){

    clearInterval(startMoving);
}