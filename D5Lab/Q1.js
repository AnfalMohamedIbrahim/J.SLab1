////////save in local storage and cookies ////////
function saveInLocal(){  

    localStorage.setItem('Email', document.getElementById("email").value );

    localStorage.setItem('Password', document.getElementById("pass").value );
   
    // 
    var emailLocal = localStorage.getItem("Email");
    var passwordLocal =localStorage.getItem('Password');

    if(emailLocal!=""&&passwordLocal!=""){
        alert("your data is saved in local as your Email is: "+emailLocal+" and your password is: "+passwordLocal);
    }
   

}
function saveCookie(){
     var Arr=[];
    //  console.log(dataArr)
    var Email= document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    loginData={
       email:Email
       ,
       
       pass: password
    }
   Arr.push(loginData);
     console.log(Arr);
     document.cookie=JSON.stringify(Arr);


    if(document.cookie!=""){

        alert("Your cookies is "+JSON.stringify(Arr) );
    }
}

function removeFromLocal(){
    localStorage.clear();
    alert("your Local storage is empty");
}

function removeCookie(){

    // After adding the “key-value” pair of a cookie, the JavaScript interpreter
    //  will check the value of the “max-age” attribute, which is set to “0,”
    //  and then delete the created cookie immediately from the system

     document.cookie="maxage=0"
     console.log(document.cookie);

    //  the JavaScript interpreter will check the expiry date
    //  and delete it immediately from the system
    // so we put an old date 

     var newDate = new Date();  newDate.setTime(newDate.getDate() - 1);

     document.cookie="expires"+newDate.toGMTString();

  
    

}