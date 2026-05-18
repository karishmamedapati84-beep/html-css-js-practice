// Read the mdn documentation of arrays

// Ways of declaring array
const myArr = [23, 43, 51, 7, 9]
const mystudents = ["CSE_DS", "CSE_C", "CSE_H"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[1])

//Array methods
myArr.push(10)
myArr.push(11)
console.log(myArr)
myArr.pop()
console.log(myArr)

myArr.unshift(19)
console.log(myArr)
myArr.shift()  //reverse of unshift
console.log(myArr.includes(9))
console.log(myArr.indexOf(9))
console.log(myArr)

//slice,splice (Difference between slice and splice)
//slice
console.log("A", myArr)

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B", myArr)

//splice
const myn2 = myArr.splice(1,3)
console.log(myn2)
//console.log("C", myArr)
