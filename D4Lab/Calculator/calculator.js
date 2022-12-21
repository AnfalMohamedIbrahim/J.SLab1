// var equal = document.querySelector(input[value="="]);
// console.log (equal);
var result = document.getElementById("Answer")

// var number;
function EnterNumber(num){
    // console.log(parseInt(num)); 
    // parseInt(num);
    // var n = num;
    // console.log(n);
    // number=num;
    // return number;
    result.value+=num;
}

// console.log(number);

// var operation;
function EnterOperator(operator){
//    console.log(operator);
result.value+=operator;
}
  
function EnterEqual(){
    alert("The Result will appear");

   result.value= eval(result.value);

    // console.log(result.value);



}
