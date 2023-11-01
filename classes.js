
// function functionname(){

//     // it will do the specific task
// }

// functionname()

// class classanme{
    
//     //Varibales 
//     //Methods 

//     // task1(){


//     // }

//     // task2(){



//     // }


// }



class student {

    static stname = "Manjula"
   place = "Bangalore"
   course = "cypress"
   Org = "DBS QA"
   
    static printname(){

        console.log(this.stname)
        console.log("This is a constructor")
        console.log("This is a constructor")
    }

 

    printdetails(){

        console.log(this.stname, this.place, this.course, this.Org)
    }


    // constructor(num1, num2){

    //     console.log(num1)
    //     console.log(num2)
    //     console.log("sum of 2 numbers is : "+ (num1+num2))
    // }

}

student.printname()

// let stud1 = new student(3,5)

// stud1.printname()


// console.log(stud1.stname)

// stud1.printname()

// stud1.printdetails()

// stud1.add(4,6)

// let stud2 = new student()
// let stud3 = new student()

// stud2.printname()

// stud2.add(12,13)

// stud2.add(23,34)

// constructor defaiult method 

//it will automatically invoked whenever you create object of the class 