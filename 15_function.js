// function calculator(number1, number2){
//     console.log(number1 + number2)
//     console.log(number1 - number2)
//     console.log(number1 / number2)
//     console.log(number1 * number2)
//     console.log(number1 % number2)
//     console.log(number1 ** number2)
// }

// calculator(4,2)

//function keyword should be used. After the function keyword the function name should be there with()  followed by the scope().

function sayMyName(){
    console.log("K")
    console.log("A")
    console.log("R")
    console.log("I")
    console.log("S")
    console.log("H")
    console.log("M")
    console.log("A")
}
sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

addTwoNumbers()
//The above line will give NaN, as no arguments are passed inside it
addTwoNumbers(3, 4);
addTwoNumbers(3, "4")
/*Let us understand the difference between Parameters and argument
Line 26-> number1,number2 is parameter
3,4 in line 32 is argument
*/

function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result;
    console.log("Intrnship"); //after return, it will not work(in function)

}
const result = addTwoNumbers(3, 5)
console.log("Result: ", result)


//---------------------Line 49 to 57-------------------------
function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("karishma"))

