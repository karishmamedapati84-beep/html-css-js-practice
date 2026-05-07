//...using map to creat another array....
const myNumbers = [1,2,3,4,5]

const newNum = myNumbers.map((num) =>num*10)
console.log(newNum);

//.....using map() to creat uppercase of array elements....
const myArray = ["Karishma","Janu","Bhavishya"]

const uppercasedmyArray = myArray.map(myArray=> myArray.toUpperCase());

console.log(uppercasedmyArray);

//...creat array of objects to using map()...

const students = [
  { name: 'pallavi', marks: 90 },
  { name: 'Divya', marks: 92 },
  { name: 'Shyam', marks: 85 }
];

const names = students.map(student => student.name);

console.log(names);