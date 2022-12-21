

//////////////////////////////Q1////////////////////

var fullname = document.getElementById("full-name");
var error = document.getElementById("error");


function border(){
    fullname.style.border = "3px solid blue";
}

function lostfocus(){
    fullname.style.border = "2px solid black";
    console.log(fullname.value.length);
    if (fullname.value.length <3 || fullname.value == "")
        error.style.display="block";
        else{
            error.remove();
        }

}
var pass = document.getElementById("pass");
var passConfirm = document.getElementById("pass-confirm");
var passError = document.getElementById("pass-error");
function check(){
     if(pass.value == passConfirm.value ){
             passError.remove();
     }else{
        passError.style.display="block";
            passError.style.color="red";
     }

}
var form = document.getElementById("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    // console.log(e);
    var newwndow = window.open("","","_blank");
    newwndow.document.write("thank you,"+ fullname.value +" for registering in our website")
    console.log(fullname.value);

})

// Q2//////////////

