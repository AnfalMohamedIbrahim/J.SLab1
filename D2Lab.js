/**
 * Q1
 */
// var nums = prompt("Enter Numbers ");
// arrnums = nums.split("");
// console.log(arrnums);
// var sum =0;
// for(var i =0 ; i<arrnums.length;i++){
// var number = parseInt(arrnums[i]);
// sum = number+sum;
// console.log(sum);
// }
// alert ("The summtion of these numbers is "+sum);
/**
 * another way for Q1 

var sum =0;
for(var i =0 ; i<arrnums.length;i++){
    sum=sum+arrnums[i]++;
    console.log(sum);
}
 */

/**
 * Q2
 */

// var input = prompt("Enter any charcters! ");
// arrinputs = input.split("");
// console.log(arrinputs);
// /*-------------to reverse the array ------*/
// // var reverse = arrinputs.reverse();
// // console.log(reverse);
// /*-------------------------------------------*/
// var reverseInput =0;
// for(var i =0 ; i<arrinputs.length;i++){
//     reverseInput=arrinputs[i]+reverseInput;
   
//     console.log(reverseInput);
// }

// alert("the reverse format of your input is "+reverseInput);



/**
 * Q3
 */

// var input = prompt("Enter charcter to check! ");
// var arr1 = input.split("");
// console.log(arr1);
// /*------------as the array is object it can't be compared so i 
// convert it into a string */
// var str1=arr1.toString(); 
// console.log(str1);
// /*--------i reversed the array to make a compared copy 
// then i converted it into string to be able to be compared----*/
// var arr2 = arr1.reverse();
// var str2=arr2.toString();
// console.log(str2);

// if(str1==str2){
//     alert("yes");
// }else{
//     alert("no");
// }
  

/**
 * Q4
 */

// var inputN = prompt("enter any number")

// var inputlist = prompt("enter a random numbers")
// var arrlist = inputlist.split("");
// arrlist.push(inputN);
// console.log(arrlist);
// var inputx = prompt("enter a specific number to search on it!")
// var index= arrlist.lastIndexOf(inputx);
// console.log(index);
// if (index == -1 ){
//     alert("-1 it isn't exists");
// }else  {
//     alert("1");
// }


/**
 * Q5
 */

// var inputN = prompt("Enter a number!");
// var inputlist = prompt("Enter a list of numbers that consists of  "+inputN);
// var arrlist = inputlist.split("");
// var inputindex = prompt ("enter any number from 0 to "+(inputN-1))
// inputindex-0
// console.log(inputindex);
// console.log(arrlist);
// var index = inputlist.charAt(inputindex)
// console.log(index);
// arrlist.splice(inputindex,1);
// console.log(arrlist);
// alert("Output is "+arrlist);


/**
 * Q6
 */

// var input = prompt("Enter any word!");
// arrinput =input.split("");
// if(arrinput.length<2){
//     alert("");
// }else{


// // console.log(input);
// var last = arrinput.length-2;
// // console.log(last);
// var lastnum = arrinput.splice(last,2)
// // console.log(lastnum);
// var firstnum =arrinput.splice(0,2);

// // console.log(firstnum);
// var strfirst = firstnum.toString();
// var strlast =lastnum.toString();
// var output = strfirst.replace(',','')+strlast.replace(',','');
// alert("Output is "+output);
// }

/**
 * Q7
 */
/*---------- 2 Os = Z--------- */
// var word = prompt("Enter Zs and Os!");
// arrword = word.split("")
// var numofZs =0;
// var numofOs = 0;
// for (var i =0 ; i <arrword.length;i++){
//         //   var count=numofZs
//         //   console.log(count);
//     //--------to count number of zs -----------    
//   if(arrword[i]=="z"){

//        ++numofZs;
       
//     //    console.log(numofZs);
//     }
//     //---------- to count number of os ----------
//       if(arrword[i]=="o"){
        
//         ++numofOs;
//         // console.log(numofOs);
//       }
//      ; 
//     }
//     console.log(numofZs);
//     console.log(numofOs);
//     //------ as number of os is twice number of zs -----
//    if(numofZs== numofOs/2){
//     alert("yes");
//    } else{
//     alert("no");
//    }



