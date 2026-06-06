// let btn1= document.querySelector('#peek')

// btn1.onclick= () =>{
//     console.log("Button Clicked")
// }
// btn1.onclick= () =>{
//     console.log("Button Clicked 2")
// }


// let btn2=document.querySelector('#geek')
// btn2.addEventListener("click",()=>
// {
//     console.log("button clicked1")

// })
// btn2.addEventListener("click",()=>
// {
//     console.log("button clicked 2")

// })
// btn2.addEventListener("click",()=>
// {
//     console.log("button clicked 3")
// })

let btn=document.querySelector('#peek')
let body=document.querySelector('body')
let mode="light";

btn.addEventListener("click",() =>{
    if(mode==="light"){
        mode="dark";
        console.log("Dark");
        body.classList.add("dark")
        body.classList.remove("light")
    }
    else{
        mode="light";
        console.log("Light")
        body.classList.remove("dark")
    }
})