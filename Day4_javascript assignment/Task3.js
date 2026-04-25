let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

let arr = arr1.concat(arr2)
console.log(arr)

//spread
let Arr = [...arr1, ...arr2]
console.log(Arr)

let nested = [1,[2,3], [4,[5]]]
console.log(nested.flat(2))