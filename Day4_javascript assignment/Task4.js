const student={
    name: "Karishma",
    email: "karishma@email.com",
    isLoggedIn: ["Monday", "saturday"]
}
console.log(student.name)
console.log(student["name"])

 const JsUser = {
    name: "Pallavi",
    email:"ABC@gmail.com"
 } 
 JsUser.email="pallavi@email.com"
console.log(JsUser.email)

Object.freeze(JsUser)
JsUser.email= "XYZ@emil.com"
console.log(JsUser.email)
console.log(JsUser)
