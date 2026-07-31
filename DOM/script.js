/*1.selector
2.html
3.css
4.event listener

*/
/*var a = document.querySelector("h1")
console.log(a)
a.innerText="giet"


var b = document.getElementById("#h2")
console.log(b)

var c = document.querySelector("button")

c.addEventListener("click",function(){
    a.style.color="red"
})*/

var btn = document.querySelector("button");
var img = document.getElementById("myImage");

var images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];

var index = 0;

btn.addEventListener("click", function () {
    index++;

    if (index >= images.length) {
        index = 0; 
    }

    img.src = images[index];
});
