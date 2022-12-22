/**
 * Q1
 */



class person{
    // to count all the persons we have incremetally
//    static count=1;
    constructor(_id,_name){

        // when using count
        // this.Id= person.count++;
        this.id=_id;
        this.name=_name;

        // handling the abstract class
        if(this.constructor==person)
        {
            throw 'error this is abstract class'
        }
    }
    displayInfo(){
        return "the Id is :"+this.Id+" the name is "+this.name
    }
    // setID(_id){
    //    this.id=_id;
    // }
}


class student extends person{
    // static count=0;
    constructor(_id,_name,_grade){
        // this.id=person.count++
        super(_id,_name);
        
        this.grade=_grade
    }
    displayStudentInfo(){
        return consol.log(this.displayInfo()+"the grade is :"+this.grade)
    }
}

class employee extends person{
    // it can count the id incrementally i don't why id doesn't work??!!
    static count=0;
    constructor(_id,_name,_salery){
        super(_id,_name);

      employee.count++;
        this.salery=_salery;
    }
    displayEmployeeInfo(){

        console.log(this.displayInfo()+"the salery "+this.salery)

        // return this.displayHTRules()
    }
// static Method can't be called an instance of the class it is called by the class it self 
   static displayHTRules(){
       
       return console.log("the rule of HR in the company to appraise the employees");
    }
    getcount() {
        return employee.count;
    }
    /**
     * Q2
     */
    showSalary(){
        console.log(this.salary)
    }

    increaseSalary(_amount){
        console.log(this.salary+_amount)
    }

}
var employee1 = new employee("kkkk",10000);
// employee.count=1
var employee2 = new employee("nohkk",10000);

employee2.showSalary();
// employee3.displayEmployeeInfo();
// var employee2=new employee("Nada",2000);

// wrong calling to the static method
// employee2.displayHTRules();
// the write calling for the static methe ((the class name));
employee.displayHTRules();

// difference between interface and abstract class? Is it allowed in JavaScript
// allowed in J.S but we should make if condition and make the constructor throw error


