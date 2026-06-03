//see the main documentation of reduce
const myNums = [1,2,3]

const myTotal = myNums.reduce(function(acc,curval){
    console.log(`acc: ${acc} and curval: ${curval}`);
      return acc + curval    
},0)
console.log(myTotal);



//************************reduce by array function************************
const myTotal1 = myNums.reduce((acc,curr) => acc+curr,0)
console.log(myTotal1)


//*******************Example****************Shopping Cart
const shoppingCart = [
    {
        itemName: "Indi Panner Pizza",
        price:299
    },
    {
       itemName: "Garlic Bread",
        price:199  
    },
    {
         itemName: "corn Pizza",
        price:399
    },
    {
         itemName: "Masala maggie",
        price:99
    }
]

const Total = shoppingCart.reduce((acc, item)=>{
    return acc + item.price
},0)
console.log(Total)