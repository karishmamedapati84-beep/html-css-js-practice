const mynumbers = [1,2,3,4,5,6,7,8,9,10]

const newNum = mynumbers.map((num) => num*10)
console.log(newNum)

//***************************Chaining***********************
const mynumbers1 = [1,2,3,4,5,6,7,8,9,10]

const newNum1 = mynumbers1.map((num) => num*10).map((num) => num+1)
console.log(newNum1)


const mynumbers2 = [1,2,3,4,5,6,7,8,9,10]

const newNum2 = mynumbers1.map((num) => num*10).map((num) => num+1).filter((num) => num>=40)
console.log(newNum2)
