
/**
 * Q1 Usng ternary operator
 */
// var temp =prompt("Enter The Temprature degree !");
// var tempDegree= parseInt(temp);
// (tempDegree>=30?alert("HOT"):alert ("Cold"))

/*---------------------Q1 another way using if ------------------*/
// var temp =prompt("Enter The Temprature degree !");
// var tempDegree= parseInt(temp);
// if (tempDegree>=30){
//     alert("HOT");
// }
// else {
//     alert ("Cold");
// }



/*-----------------------------------------------------------------*/
/**
 * Q2 
 */

// var Name = prompt("Enter Your Name!");
// if( isNaN(Name) ){
    
//     var birth=prompt("Enter Your BirthYear! ");
//     var birthyear =parseInt(birth) ;
//     for(var i=0;i<2;i++){
//         if (isFinite(birthyear) & birthyear<2010) {
//             var age =2022-birthyear;
//             // console.log(age);
//             document.write("Name:")
//             document.write(Name)
//             document.write("<br>")
//             document.write("Birthyear:")
//             document.write(birthyear)
//             document.write("<br>")
//             document.write("Age:")
//             document.write(age);
//             i=2;
//            }
//         else{
//             alert("Try again");
//             var birth=prompt("Enter Your BirthYear! ");
//              var birthyear =parseInt(birth) ;
//         }
        

//     }

      
//     }
    
    


/**
 * Q3
 */

// var firstNumA =parseInt(prompt("Enter first Number A")) ;
// var secondNumB =parseInt(prompt("Enter second Number B")) ;
// var thirdNumC = parseInt(prompt("Enter third Number C")) ;
// /*----------the discriminant is the under the square in the nominator */
// var discriminant = secondNumB * secondNumB - 4 * firstNumA * thirdNumC;

// if (discriminant > 0) {
//    var x1 = (-secondNumB + Math.sqrt(discriminant)) / (2 * firstNumA);
//    var x2 = (-secondNumB - Math.sqrt(discriminant)) / (2 * firstNumA);

//     // result
//     console.log(x1 ,x2);
// }// condition for real and equal roots
// else if (discriminant == 0) {
//     x1 = x2 = -secondNumB / (2 * firstNumA);

//     // result
//     console.log(x1,x2);
// }



     


/**
 * Q4
 */

// var num1 = prompt("Enter a number morethan 9");

// var num2 = prompt("Enter a number morethan 9");

// var numb1=num1.slice(1);
// var numb2=num2.slice(1);
// var sum =(parseInt(numb1)+parseInt(numb2));
// alert("The summtion is "+sum );


/**
 * Q5
 */

var distanceTookByCarY = prompt("Enter the distance That car Y get away from Car x");
alert("The Time Took By car Y to get This distance is "+parseInt(distanceTookByCarY)*2+" minutes");





