/**
 * Q1
 */
// var parentWindow = window.open('','www.facebook.com')

// document.write("<button id='btn' >Close Child Window</button>");
// var btn =document.getElementById('btn');
// addEventListener('click',closewindow);
// function closewindow(){

// }

// function move(){

//     myWindow = window.open("","","_blank")
//     myWindow.moveby(250,250);
   
//  }
//  function show(){
//      setTimeout(move,2000)
//  }



/**
 * Q2
 */

//  document.write("<button id='btn' >Start Clock</button>");
//  document.write("<h1 id='display' ></h1>");
//  var btn =document.getElementById('btn');
//  addEventListener('click',clock);
//  function clock(){
//     alert("Clock Started")
   
//       setInterval(displayClock);
//    }
//    function displayClock(){
//        var now=new Date();
//        var time = document.getElementById("display");
       
//       var current= time.innerText =now.toLocaleTimeString() ;
   
//    }



/**
 * Q3
 */

// document.write("<h1 id='open' > Click Me To Open </h1>");
// var openlink =document.getElementById('open');
// // console.dir(openlink);
// openlink.addEventListener('click',setTimeout)
// setTimeout(function() {
//     var parentWndw = window.open('','','_blank');
 
//     parentWndw.document.write("<p>Hey This is Me </p>");

// },3000);

// document.write("<h1 id='close' > Click Me To Close </h1>");
// var closelink =document.getElementById('close');
// closelink.addEventListener('click',closewndw);
// function closewndw(){
//     parentWndw.close();
// }

/**
 * Q4
 */

//  function scroling(){

//     if (scrollY>777){
//     alert("hi")
    
//     }
//     }


/**
 * Q5
 */

// document.write("<button id='btn'  >New Window</button>");
// var btn = document.getElementById('btn');
// btn.addEventListener('click',openwndow);
// function openwndow(){
//     var childwndw= window.open('','','_blank');
//     childwndw.document.write("Hey Im the new window that will close after a while Don't waits for me!!!");
//     setTimeout(function(){
//         childwndw.close();
//     },10000);
// }



/**
 * Q6
 */

document.write("<button id='btn'  >Click Me </button>");
var btn = document.getElementById('btn');
btn.addEventListener('click',openwndow);
function openwndow(){
    var newwndw= window.open('','','_blank');
    // newwndw.document.write("<button id='btn'  >scroll </button>");
    //    var btn = document.getElementById('btn');
    //    btn.addEventListener('click',scroling);
    //    function scroling(){
    //     window.scrollBy(200,0);
    //    }
    newwndw.document.body.style.height = "200px";
    newwndw.document.body.style.height = "200px";

    
}