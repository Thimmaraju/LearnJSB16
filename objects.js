var car = {
 
    "Manufacturer": "TATA",
	"model" : 2022,
	"TransimissionAuto": true
 }

 console.log(typeof(car.TransimissionAuto))

console.log(car.model)

const student ={

    stuname : "Naveen",
    place: "Bangalore",
    age: 30

}

console.log(student.stuname)

console.log(student['stuname'])

console.log(student['place'])

student['place'] = "Pune"

console.log(student.place)

console.log(student.lastname)
student['lastname'] = "D"

console.log(student.lastname)

delete student['place']

console.log(student.place)

menuitems = {

    value1 : "Admin",
    value2 : "PIM",
    value3 : "Leave",
    value4 : "Time",
    value5 : "Recruitment",
    value6 : "My Info",

}

//cy.contains(menuitems[i]).should("be.visible")

for(let i in menuitems){

    console.log(menuitems[i])
}