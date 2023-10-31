

num1 = 10

str = "120"

num2 = Number(str)   //120

console.log(num2)

console.log(typeof(num2))

num3 = String(num1) //"10"

console.log(typeof(num3))

str = "20" - "Raju"

num4 = Number(str)  //20

console.log(num4)

console.log(isNaN(num4)) //true or false

num5 = "$209.99"

str3 = Number(num5.replace("$", ""))

str4 = Number(num5.substring(1,7))
console.log(str4)

rupees = str4*83.26

console.log(rupees)

// console.log(typeof(num5))

// num6  = parseInt(str3) //20.0 

// console.log(num6)


num8 = 35869947698046980754967895378095n +1000n

console.log(num8)

// 5e9 === 5000000000

// 5e-5 === 0.00005

  a = 55                         //55
const b = new Number(45);        //45
