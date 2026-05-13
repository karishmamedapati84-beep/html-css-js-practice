//see the MDN Documentation for Dates.

let myDate = new Date()
console.log(myDate)

//methods to make the date readable
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)  //Interview question,date is of object type


//Month begins from 0 in Javascript
let myCreatedDate1 = new Date(2025, 0, 23)
let myCreatedDate2 = new Date(2025, 0, 23, 5, 30 )
console.log(myCreatedDate1.toLocaleString())
console.log(myCreatedDate2.toLocaleString())



//Dates in specific format as per busines requirement
let myCreatedDate = new Date("2025-01-14")
console.log(myCreatedDate.toLocaleString())
