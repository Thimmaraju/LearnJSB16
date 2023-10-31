

arr1 = []   // empty array

arr2 = [1, "raju", true, null ] // hetiro 

arr3 = [1,3,5,7,9] // Home 

console.log(arr3.length) // 5

//elements in the array index always starts from 0

console.log(arr3[arr3.length-1])

//arrayname[index]


console.log(arr3)

creds = ["Admin", "admin123"]

console.log(creds[0])

arr4 = [9,2,1,7,6]
console.log(arr4)

sortedarr = arr4.sort()


console.log(sortedarr)

secondlargetnum = sortedarr[0]

console.log(secondlargetnum)

concated = creds.concat(sortedarr)

console.log(concated)

arr6 = concated.reverse()

console.log(arr6)

str = "Raju G"

arr7 = str.split("")

console.log(arr7)

sentence = "this is javascript class"

arr8 = sentence.split("").reverse().join("")
 
console.log(arr8)


arr9 = ["Raju", "Naveen", "Madan"]

arr9[2]= "Ramakrishna"

console.log(arr9[2])

console.log(arr9)

arr9[6]= "Viktor"

console.log(arr9.length)

activities = ["wake up", "sleep"]

activities.push("Exersize")


activities.unshift("Read")


console.log(activities)

//[ 'Read', 'wake up', 'sleep', 'Exersize' ]

//unshift will add the element at the beginning of the array

//push will add the element at the end of the array

//pop and shift

//shift will remove the element at the beginning of the array

//pop will remove the element at the end of the array


// activities.pop()

// activities.shift()

console.log(activities)


if(activities.includes("sleep")){

    console.log("Element present")
}

//[ 'Read', 'wake up', 'sleep', 'Exersize' ]
//splice ()

console.log(activities.slice(3))



//for in  - es6 version 

let colors = ['red', 'green', 'blue'];

for (const i of colors){
    console.log("Begin")
    console.log(i);
     console.log("end")
}



