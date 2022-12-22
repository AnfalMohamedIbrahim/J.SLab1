/**
 * Q3
 */
// literal object 
// literal object to manually create each individual object,
//  we can use Constructor as a blueprint to be more generalized
//  Object literals are basically singletons with variables that are all public
// This means when a change is made to the object, it affects that object across the entire script
// dot notation to get the values of the object 
var scientificDepartment=
{
name:"science",
location:"Egypt" ,
address:{
city:"Cairo",
street:"12 ElDokkistreet"
,
zipCode:"123456"

}
, display:()=>{
    console.log(scientificDepartment);
}
}
console.log(scientificDepartment);



