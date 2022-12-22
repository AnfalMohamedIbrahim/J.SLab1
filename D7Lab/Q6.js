
const countries=["Algeria","Andorra","Angola","Angola","Albania","Albania","Argentine","Argentine"];

function findUniqueSet(array){

    const uniqSet=new Set(array);
    const filteredElements=array.filter(currentValue=>{

        if(uniqSet.has(currentValue)){
            uniqSet.delete(currentValue);
        }else{
            return currentValue;
        }
    });
    console.log(filteredElements);
}
findUniqueSet(countries)

// const array=[]
// array=prompt("enter array of counteries and i will find the duplicated ones!")
// // array.push(counteriesIn)
// console.log(array)
// findUniqueSet(array);
