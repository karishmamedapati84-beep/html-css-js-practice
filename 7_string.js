const name = "Karishma"
const proj = 10

console.log(name+proj+"Value")  //Not recommended as it is outdated

console.log(`Hello my name is ${name} and my projects are ${proj}`)   //Modern way

const gameName = new String('Giet-University')
console.log(gameName)
console.log(gameName[0])


console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newstring = gameName.substring(0,3)
console.log(newstring)

const anotherString = gameName.slice(0,4)
console.log(anotherString)

const newStringOne = "  karishma  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://karishma/karishma%20profile"
console.log(url.replace('%20','-'))
console.log(url.includes('karishma'))