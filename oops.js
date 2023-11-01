
// // class A{

// //     method1(){

// //         console.log("This is method1 ")
// //     }

// //     method2(){

// //         console.log("This is method2")
// //     }


// //     method3(){

// //         console.log("This is method3 ")
// //     }
// // }

// // const obj1 = new A()

// // obj1.method2()

// class employee{

// //    empname = "Ranjitha"
// //    empplace= "Bangalore"

//  getdetails(value1, value2){

//     this.empname = value1
//     this.empplace = value2
//  }


//    display(){

//     console.log(this.empname, this.empplace)
//    }

//    printmessage(){

//     console.log("Im dependent")
//    }
// }


// const  emp1 = new employee()

// emp1.getdetails("Raju","blr")

// //emp1.display()

// console.log(emp1.empname)





// class A{

//     method1(){

//         console.log("This is method1 ")
//     }

//     method2(){

//         console.log("This is method2")
//     }


//     method3(){

//         console.log("This is method3 ")
//     }
// }


// class B extends A{

//     method1fromB(){

//         console.log("This is method1 from B ")
//     }

//     method2fromB(){

//         console.log("This is method2 from B")
//     }


//     method3fromB(){

//         console.log("This is method3  from B")
//     }
// }



// class C extends B{

//     method1fromC(){

//         console.log("This is method1 from C ")
//     }

//     method2fromC(){

//         console.log("This is method2 from C")
//     }


//     method3fromC(){

//         console.log("This is method3  from C")
//     }
// }

// const obj2 = new C()

// obj2.method1()

// obj2.method1fromB()
// obj2.method1fromC()


// class employee {

//     constructor (val1, val2, val3){
//     this.empname = val1;
//     this.empnum = val2;
//     this.empdept = val3;
//     }
    
//     display(){

//         console.log(this.empname,this.empnum , this.empdept)
//     }

// }


//   employee.prototype.Org = "DBS QA"

//  employee.prototype.displaydetails= function (){

//      console.log(this.empname, this.empnum, this.empdept, this.Org)
//  }

//   emp1 = new employee("Raju", 418, "L&D")


// //   emp1.display()

//   emp1.displaydetails()

//   //console.log(emp1.Org)


//   emp2 = new employee("Kiran", "440", "L&D")

//   //emp2.display()

//   //console.log(emp2.Org)


//   emp3 = new employee("Naveen", "765", "Marketing")


//   console.log(emp3.Org)






class A{

    display(a,b){
        console.log(a)
        console.log(b)
        console.log("result :"+ (a+b))
    }
    message(){

        console.log("Parent class message")
    }

}
class B extends A
{
    display(a,b,c){
        console.log(a)
        console.log(b)
        console.log(c)
        console.log(a+b+c)
    } 

    message(){

        console.log("Clild class message")
    }
}


const obj = new A()

obj.message()

//method overriding 

obj.display(2,5,8)

//method overloading 

//async await 

//promises

// set and maps 

//Mocha - Regular expression

//Cucumber BDD  - Regular expression

