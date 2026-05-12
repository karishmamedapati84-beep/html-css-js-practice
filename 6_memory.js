// stack (primitive),Heap(non-primitive)

// stack
let myYoutubename = "CSE@Odisha"

let anothername = myYoutubename
anothername = "IT@Delhi"

console.log(myYoutubename)
console.log(anothername)

// Heap
let userOne = {
    email : "Karishma@gmail.com",
    upi : "usr@ybl"
}

let userTwo = userOne

userTwo.email = "ABC@email.com"
console.log(userOne)
console.log(userTwo)