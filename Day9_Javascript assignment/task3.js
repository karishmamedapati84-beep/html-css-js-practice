///....reduse()....
const myNums = [5,10,15,20]

const myTotal = myNums.reduce(function (num1,num2){
    console.log(`av: ${num1} and cv:${num2}`);
    return num1 + num2;
 },0)
console.log(myTotal);
//...//...//

const expenses = [100,200,50]

const TotalSpending = expenses.reduce(function(av,cv){
    console.log(`av:${av} and currval:${cv}`);
    return av+cv;
    
},0)
console.log(TotalSpending);

//.....
const Students = [
    {
        studentName:"Divya",
        marks:500
    },
     {
        studentName:"Shyam",
        marks:450
    },
     {
        studentName:"Mahi",
        marks:490
    },
     {
        studentName:"Hari",
        marks:495
    },
]
const totalMarks = Students.reduce((sum, student) => sum + student.marks, 0);

const average = totalMarks / Students.length;

console.log("Class Average:", average);


////......
const students = [
  { name: 'Karishma', marks: 90 },
  { name: 'Bhavishya', marks: 85 },
  { name: 'Devi', marks: 79 },
  { name: 'Sanju', marks: 90 },
  { name: 'janu', marks: 89 }
];

const passedStudentNames = students
  .filter(student => student.marks > 40)       
  .map(student => student.name.toUpperCase()); 

console.log(passedStudentNames);