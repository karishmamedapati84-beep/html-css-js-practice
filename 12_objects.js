//object literals

const JsUser = {
    name: "Karishma",
    age: 18,
    location: "chennai",
    email: "karishma@email.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//acccess objects
console.log(JsUser.email)

//another way to access objects
console.log(JsUser["email"])

//How to change or override the values
JsUser.email = "karishma@giet.edu"
console.log(JsUser.email)

//Freeze
Object.freeze(JsUser)
JsUser.email = "karishma@drdo.org"
console.log(JsUser.email)
console.log(JsUser)
