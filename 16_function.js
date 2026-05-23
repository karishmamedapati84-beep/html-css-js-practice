function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500))


//The abobe issue can be resolved by using the rest operator. The "..." is used as both spread and rest operators
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500))


const user = {
    username: "Karishma",
    price: 299
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)

}
handleObject(user)


const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))