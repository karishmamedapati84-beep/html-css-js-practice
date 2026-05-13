const score = 400

const balance = new Number(100)
console.log(balance)

//To convert into string
console.log(balance.toString())

//Hence we can use the string methods
console.log(balance.toString().length)
console.log(balance.toFixed(2))

//toLoaleString()
const hundreds = 1000000
console.log(hundreds.toLocaleString())

//-----------------------Maths---------------------
console.log(Math) //print it in the console
console.log(Math.abs(-4))
console.log(Math.round(4.8))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(4,3,5,9))
console.log(Math.max(4,3,5,9))


console.log(Math.random())
console.log((Math.random()*10+1))
console.log(Math.floor(((Math.random()*6)+1)))   //For Dice Game