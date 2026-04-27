function tocelcius(fahrenheit){
    return (fahrenheit - 32) * 5/9
}
let result = tocelcius(77)
console.log(result)

let result1=tocelcius()
console.log(result1)

//calling it without any parameters reasults in NaN