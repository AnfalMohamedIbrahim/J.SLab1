var par=document.getElementById("PAR");
// var inputs=document.getElementsByTagName("input");
// console.log(inputs);
var fontInputs=document.querySelectorAll("input[name=Font]");
// console.log(fontInputs);
var txtAlign=document.querySelectorAll("input[name=Align]");
// console.log(txtAlign);
var height=document.querySelectorAll("input[name=Height]");
// console.log(height);
var lettreSpacing=document.querySelectorAll("input[name=Lspace]");
// console.log(lettreSpacing);
var txtIndent=document.querySelectorAll("input[name=Indent]");
// console.log(txtIndent);
var txtTransform=document.querySelectorAll("input[name=Transform]");
// console.log(txtTransform);
var txtDecoration=document.querySelectorAll("input[name=Decorate]");
// console.log(txtDecoration);
var border=document.querySelectorAll("input[name=Border]");
// console.log(border);
var borderColor=document.querySelectorAll("input[name=BorderColor]");
// console.log(border);

// ----------------------for all 
// General Function but there is a problem in the coloring ??!!!

function checkebox(e){
    console.log("yes")
//   e.checked=true
  
//   console.log(e.path[0])
  e.path[0].checked="checked";
  console.log(e.path[0].getAttribute("onclick"))
  console.log(e.path[0].getAttribute("name"))
  var changableName=e.path[0].getAttribute("name").toLowerCase();
  console.log(changableName);
 var checkedarr =e.path[0].getAttribute("onclick");
var inchecked=checkedarr.split("()");
console.log(inchecked[0])
if(changableName="font")
par.style.fontFamily =inchecked[0];
if(changableName="textalign")
par.style.textAlign =inchecked[0];
if(changableName="linehieght")
par.style.lineHeight =inchecked[0];
if(changableName="lettrespacing")
par.style.letterSpacing =inchecked[0];
if(changableName="textindent")
par.style.textIndent =inchecked[0];
if(changableName="texttransform")
par.style.textTransform =inchecked[0];
if(changableName="textdecoration"){
    if(inchecked[0]="line"){

        par.style.textDecoration ="line-through";
    }
    else {
        par.style.textDecoration =inchecked[0];
    }
}
if(changableName="textborder")
par.style.border =inchecked[0];
if(changableName="bordercolor")
    par.style.borderColor=""+inchecked[0];
    if(inchecked[0]="ChangeBorderColor('green')"){
        par.style.borderColor="green";
    }

}



// --------------for fonts-------------

for(var i=0;i<fontInputs.length;i++){
    // console.log(fontInputs[i].checked);
    fontInputs[i].onclick=null;
    fontInputs.forEach(check=>{
        check.addEventListener("click",checkebox)
        
    })
      
}

// // --------------------------text align
for(var i=0;i<txtAlign.length;i++){
    // console.log(txtAlign[i]);
    txtAlign[i].onclick=null;

    txtAlign.forEach(check=>{
        check.addEventListener("click",checkebox)
       })
    }

// // ----------------------hieght
for(var i=0;i<height.length;i++){
    // console.log(height[i]);
    height[i].onclick=null;

    height.forEach(check=>{
        check.addEventListener("click",checkebox)
       })
    }
   


// // ---------------------------letter spacing

for(var i=0;i<lettreSpacing.length;i++){
    // console.log(lettreSpacing[i]);
    lettreSpacing[i].onclick=null;

   lettreSpacing.forEach(check=>{
        check.addEventListener("click",checkebox)
       })
}
   


// // ------------------------------txtIndent
for(var i=0;i<txtIndent.length;i++){
    // console.log(txtIndent[i]);
    txtIndent[i].onclick=null;

    txtIndent.forEach(check=>{
        check.addEventListener("click",checkebox)
       })
    }
   


// // -------------------------------text transform
for(var i=0;i<txtTransform.length;i++){
    // console.log(txtTransform[i]);
    txtTransform[i].onclick=null;

    txtTransform.forEach(check=>{
        check.addEventListener("click",checkebox)
       })
    }
   

// // ---------------------------textDecoration
for(var i=0;i<txtDecoration.length;i++){
    // console.log(txtDecoration[i]);
    txtDecoration[i].onclick=null;

    txtDecoration.forEach(check=>{
        check.addEventListener("click",checkebox)
       })
    }


// -----------------------------------text border

for(var i=0;i<border.length;i++){
    // console.log(border[i]);
    border[i].onclick=null;

    border.forEach(check=>{
        check.addEventListener("click",checkebox)
       })
    }
   
// ----------------bordercolor

for(var i=0;i<borderColor.length;i++){
    // console.log(borderColor[i]);
    borderColor[i].onclick=null;

    borderColor.forEach(check=>{
        check.addEventListener("click",checkebox)
       })
  
    }
par.style.borderColor="red"
