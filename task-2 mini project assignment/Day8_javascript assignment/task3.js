function caculateAverage(num1,num2,num3){
   let average = (num1+num2+num3)/3
   return average
}
const averageMarks = caculateAverage(2,3,4)
console.log(averageMarks)


const studentDetails ={
    studentName : "karishma",
    age : 18
}
function printStudentDetails(student){
    console.log(`student Name is ${student.studentName} and age is ${student.age}`)
}
printStudentDetails(studentDetails)

