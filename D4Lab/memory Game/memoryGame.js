var layouts = document.querySelectorAll(".layout");

// console.log(layouts);

var container=document.querySelectorAll(".container div");

// console.log(container);
var count=0
var idSaver1=[]
var h1=document.getElementsByTagName("h1");
container.forEach(div=>{
    // console.log(div);
    div.addEventListener("click",function(){
        if(div){
            count++;
            // console.log(div.id);
            // console.log(div.children)
            div.children[0].style.display="none";
             idSaver1.push(div.children[0].id);
            // console.log("first id is "+idSaver1[0]);
            if(count>1){
                // console.log("yes");
                var idsaver2=div.children[0].id;
            
                console.log("second"+idSaver1[0]);
                console.log("first id is "+idSaver1[1]);
                // console.log("second id is "+idSaver1[1]);
                if(idSaver1[0]==idSaver1[1]){
                    console.log("yes");
                    // div.children[0].style.display="none";
                  var flipped=  document.querySelectorAll("#"+idsaver2);
                  console.log(flipped);
                  flipped.forEach(flip=>{
                      flip.className="matched";
                      if(layouts.className ="matched"){
                        h1.style.display="block"
                   }
                  })
                  setTimeout(()=>{
                    for(var i=0;i<layouts.length;i++){
                         if(layouts[i].className !="matched"){
                      layouts.forEach(layout=>{
                        layout.style.display="block";
                      })
                           
                         }
                
                    }
               },3000)
                }
                  
                
            }
            // if(div.children[0].id=div.children[0].id){
            //        console.log("yes")
            //     // var idsaver2=div.id;
            //     console.log(div.children[0].id);
            // }
            
            
            // if(count<=2 && idSaver1==idsaver2){
            //     div.children[0].style.display="block";
            // }
        }
    });
});

// function flip(e){

// for(var i=0; i<container.length;i++){
//     console.log(container[i].id);
// }

//     console.log(e);
//     if(e.isTrusted ="True"){
//         console.log("yes");
//         // console.log(layout)

//         container.forEach(click=>{
//             // click.style.display="none";
//             console.log(click)
//         })
//     }
// }