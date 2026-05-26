const user = {
    username: "Karishma_Medapati",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        //console.log(this)
    }
}

user.welcomeMessage()
//when we are refering to the current context we use the keyword 'this'


//console.log(this)

//*******************Arrow Function***********************
const insta = () => {
    let username = "Karishma"
    console.log(this)

}
insta()


const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(3,4))


//Implict Return
const addTwooooo = (num1, num2) => num1 + num2

console.log(addTwo(3,4))
//if you are using curly braces{}, then it is mandatory to write the return statement otherwise not
//line 33 can also be written
const addTwooo = (num1, num2)  => (num1 + num2)

//To return object
const addTwoo = (num1, num2) => ({username: "karishma"})