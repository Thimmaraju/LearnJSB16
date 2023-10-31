
// str = "10"

// str1 = ""

// str2 = "this is javascript class"
//       + "we are dciscussing strings "


// console.log(typeof(str))

// st3 = 'Naveen'

// console.log(typeof(st3))

// st4 = `Madan`

// console.log(typeof(st4))


// st5 =  "India's capital city Delhi"

// console.log(st5)


// const a = 'hello';                // hello 
// const b = new String('hello');    // hello 

// console.log(typeof(a))

// console.log(typeof(b))

// arr = ["Raju", true, "Atul"]

// arr[2] = "xyz"

str = "This is Javascript"

// index starts from 0

console.log(str.length)

console.log(str[2])

console.log(str.charAt(0))

console.log(str.substring(0,4))

str2 = "     raju     "
str3 = str2.trim()

console.log(str2)
console.log(str3)

str4 = "₹44,999        "



str5 = str4.replace("₹", "").replace(",", "").trim()

str6 = Number(str5)

charges = 40

console.log(str6+charges)
//4499940


str7 = "G THIMMaRAJU"
//st9 = str7.toLowerCase()

st8 = "g thImmaraju"

str8 = st8.toUpperCase()
//A is not equal to a 

console.log(str8)
console.log(str7)

str9 = "This is Bangalore"

if(str9.includes("is")){

    console.log("Text is presnt ")
}

arr2 = str9.split(" ")

console.log(arr2)

const name2 = 'Peter';
const name1 = "Jack";
const result = `The names are ${name2} and ${name1}`;

console.log(result)


//str10 = str9.concat(result)
str10 = str9+result 
  console.log(str10)


st11 = "Raju"
st12 = "G"

final = st11+st12 //Raju/nG
console.log(final)
console.log(final.slice(0,3))

str = "Raju"

//expect(str).to.equal("raju") 
