
//  class Box
//  {
    
//     constructor(_width,_height,_arrOfBooks){

//         this.width=_width;
//         this.height=_height;
//         this.arrOfBooks=_arrOfBooks;
//     }

//      valueOfBox(){
//         var sum=0;
//         for(var i=0;i<this.arrOfBooks.length;i++)
//         {
//         sum += this.arrOfBooks[i].numberOfPages;
        
//         }
//       return sum;

//     }
//     areaOfBox(){

//       return this.area=(this.width*this.height)*2
//     }
    
//     }
     
    
//     class book{
//        constructor (_id,_name,_writerName,_numberOfPages){

//            this.id=_id;
//            this.name=_name;
//            this.writename=_writerName;
//            this.numberOfPages=_numberOfPages;
//        }
//     }


//     var book1=new book("1","clean code","Robert",462);
//     var book2=new book("2","Becoming","Michelle Obama",488);
//     var book3=new book("3","Rich Dad Poor Dad","Robert kiyosaki",400);
   
    
//    var idOfBook= prompt("Enter your preferred type of reading and i'll tell you the most recommended book in it 1=>programming , 2=> Economics ,3=>social ")
//     if(isFinite(idOfBook)){
//                 switch(parseInt(idOfBook)){
//                     case 1:
//                         alert(JSON.stringify(book1));
//                         break;
                         
//                     case 2:
//                         alert(JSON.stringify(book2));
//                         break;
                         
//                     case 3:
//                         alert(JSON.stringify(book3));
//                         break;
                         
//                 }

        
//     }
//     console.log(book1.writename)
  
//     var box1= new Box(20,30,[book1,book2,book3]);
//     console.log(box1)
    
   
//     console.log(box1.valueOfBox())
    


/**
 * Q2
 */

// class point3D{
//     constructor(_x,_y,_z){
//         this. x=_x||0;
//         this. y=_y||0;
//         this. z=_z||0;
//     }
//     print3Dpoint(){
//       console.log("3DPoint: X="+this.x+",Y= "+this.y+", Z="+this.z);
//     }
//     Distance(p2){

//         var distance = Math.sqrt((p2.x-this.x)^2+(p2.y-this.y)^2+(p2.z-this.z)^2)
        
//         return distance ;
//     }

    
// }

// var first3DPoint = new point3D(10,20,30);

// first3DPoint.print3Dpoint();

// // for test the other point 
// p2Test=new point3D(40,50,60);

// // to calculate the distance between two 3Dpoints 

// console.log(first3DPoint.Distance(p2Test));



/**
 * Q3
 */



 class course{
    constructor(_idOfCourse,_nameOfsubject,_grade){
    this.idOfCourse = _idOfCourse;
    this.nameOfsubject = _nameOfsubject;
    this.fullGrade = _grade;
    }

 }

class student{

   constructor (_idOfStudent,_nameOfStudent,_arrOfCourses,_arrOfGrades){

       this.idOfStudent = _idOfStudent;
       this.name = _nameOfStudent;
       this.arrOfCourses = _arrOfCourses;
       this.arrOfGrades=_arrOfGrades;
   }
   displayCourses(){
       var courses=[];

    for(var i=0;i<this.arrOfCourses.length;i++){
     courses.push(this.arrOfCourses[i].nameOfsubject)
    }

    console.log("All the courses you take: "+courses);

   }
   displayGrades(){
    var grades=[];
    var summutionOfGrades;
    for(var i=0;i<this.arrOfGrades.length;i++){
     
     grades.push(this.arrOfGrades[i])
          
        var grade=this.arrOfGrades[i]+0

     summutionOfGrades=+grade;
     
     
    }
    console.log("All the courses you take: "+this.arrOfGrades)
   
    console.log("All the grades you got in All courses"+grades)
    console.log("the sum of all grades is :"+summutionOfGrades)
   }

}
var course1 = new course(1, "J.s",100);
var course2 = new course(2, "PHP",100);
var course3 = new course(3, "C ProgrammingL",100);

var arrOfCoursesOfStudents = [course1, course2, course3];


var arrOfgradesOfStudent1 =[100,100,100]
var student1 = new student(1, 'Anfal', arrOfCoursesOfStudents,arrOfgradesOfStudent1);

console.log(student1.displayCourses());

console.log(student1.displayGrades());


var studentId=prompt("Enter Your ID ");
var studentName=prompt("Enter Your Name");
var grades=[];
for(var i=0;i<arrOfCoursesOfStudents.length;i++){

    var studentGrades=prompt("Enter your Grade in :"+JSON.stringify(arrOfCoursesOfStudents[i].nameOfsubject))
    grades.push(studentGrades)
}
var dynamicStudent=new student(studentId,studentName,arrOfCoursesOfStudents,grades)
alert(JSON.stringify(dynamicStudent));
