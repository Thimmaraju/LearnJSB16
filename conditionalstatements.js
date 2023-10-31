
//if 

//if else

//else if 

//switch 

  
// if(condition){


// }

if("10"==10){
 
    console.log("Raju")
    console.log("Raju")
    console.log("Raju")
    console.log("Raju") 
}
else{

    console.log("Madan")
    console.log("Madan")
    console.log("Madan")
    console.log("Madan")
}
 
// var num = 57
// if (num >0){

//     //delete
// }
// else{

//     //create
//     //delete
// }

// condition1 - true 

// {


// }

// condition2 - true
// {


// }
// else{


// }

// esle if 


let marks=65

if (marks > 90 && marks <= 100) {
    console.log("grade = 'A+'");
}
else if (marks > 80 && marks <= 90) {
    console.log("grade = 'A'");
}
else if (marks > 70 && marks <= 80) {
    console.log("grade = 'B'");
}
else if (marks > 60 && marks <= 70) {
    console.log("grade = 'C'");
}
else if (marks > 50 && marks <= 60) {
    console.log("grade = 'D'");
}
else {
    console.log("grade = 'fail'");
}


//Switch 


//d = new Date().getDay()

let day;

switch (new Date().getDay()-1) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
    break;
    
}

console.log(day);
