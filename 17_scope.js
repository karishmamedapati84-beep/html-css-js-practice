//Global scope and Local Scope
// var c = 300
// if (true){
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }
// console.log(a)
// console.log(b)
// console.log(c)  //This is the reason why we are not using Var.

//whatever, I write inside the if, it is block scope but outside is global scope
//------------------------------Comment the above to undersand--------------

let a = 300;
if (true){
    let a = 10;
    const b = 20;
    console.log("Inner:",a);
}
console.log(a)
console.log(b)