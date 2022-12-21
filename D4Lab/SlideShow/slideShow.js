var img =document.getElementsByTagName("img");

console.log(img);
var i=0;

function next(){
// img[0].src="./2.jpg";

switch(i){
    case 0:
    img[0].src="./1.jpg";
    
    i++;
    break;
    case 1:
    img[0].src="./2.jpg";
    i++;
    break;
    case 2:
    img[0].src="./3.jpg";
    i++;
    break;
    case 3:
    img[0].src="./4.jpg";
    i++;
    break;
    case 4:
    img[0].src="./5.jpg";
    i++;
    break;
    case 5:
    img[0].src="./6.jpg";
    i=0;
    break;
}
      
} 




function slideShow(){
    show=setInterval(function(){
           next();
     },2000);
}
function stop(){
    clearInterval(show)
}
function previous(){
    switch(i){
        case 1:
        img[0].src="./"+i+".jpg";
        
        i--;
        break;
        case 2:
            img[0].src="./"+i+".jpg";
        i--;
        break;
        case 3:
            img[0].src="./"+i+".jpg";
        i--;
        break;
        case 4:
            img[0].src="./"+i+".jpg";
        i--;
        break;
        case 5:
            img[0].src="./"+i+".jpg";
        i--;
        break;
        case 6:
            img[0].src="./"+i+".jpg";
        i=6;
        break;
    }
}