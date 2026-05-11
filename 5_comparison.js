console.log("2">1)
console.log("02">1)


console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

//The reason is that an inequality check == and comparison > < >= <= work differently.
//Comparisons onvert null to a number, treating it as 0. That's why null>=0 is true and null>0 is false.
//==) means normal check , (===) means strict check.



//In all cases undefined will give false only
console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined >= 0)


//strict check===
console.log("2" == 2)
console.log("2" === 2)