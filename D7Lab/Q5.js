
var fruits = ["apple", "strawberry", "banana", "orange", "mango"] 


fruits.forEach(function (fruit) {

 if(isNaN(fruit)){
    console.log("done")
 }else{  console.log("no a string")}
        
    });



    fruits.forEach(function (fruit) {
       
        if(fruit.indexOf("a",0)==0)
        {
           console.log("done :",fruit , "starts with a")
        }
        else {  console.log(fruit , " donot starts with a")}
               

           }
           
    )

var filtered=[];

    fruits.forEach(function (fruit) {
        if(fruit.indexOf("b",0)==0 || fruit.indexOf("s",0)==0 )
{
    filtered.push(fruit)
}

    })
    console.log(filtered)

var i=0;

    fruits.forEach(function (fruit) {

    for(i=0;i<filtered.length;i++)
    {
        if(filtered[i]==fruit){
            console.log (fruit)
        }
    }

}    )