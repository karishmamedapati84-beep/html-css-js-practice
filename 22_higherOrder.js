//for of

const arr = [1, 2, 3, 4, 5]
for (const num of arr){
    console.log(num)
}

//********************Example2**********************
const greetings = "Hello world"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}

//*********************map**************************
//Map is also an object in javascript. see MDN documentation of map
const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('Fr',"France")
map.set('IN',"India") // unique value
console.log(map);


//how to apply loop on map
for(const [key, value] of map){
    console.log(key, ':-', value)
}



//***********************Objects*********************
//maps are iteratable but not objects. there are other way to iterate objects which will be discusses further.
const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

for(const [key, value] of  myObject){
    console.log(key, ':-', value)
}