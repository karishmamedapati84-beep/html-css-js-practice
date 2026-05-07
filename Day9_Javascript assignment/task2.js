//...to select nums using filter().....
const myArray = [10,25.30,45,50]

 const newNums = myArray.filter((num) => num>30);
console.log(newNums);

//....using filter()....
const users = [
  { name: 'Pallavi', isActive: true },
  { name: 'Divya', isActive: false },
  { name: 'shyam', isActive: true }
];

const activeUsers = users.filter(user => user.isActive);

console.log(activeUsers);

//....lenght of names filter()....
const myUsers = ["Karishma","Janu","Bhavishya"]

const Users = myUsers.filter(names=>names.length>5)
console.log(Users);