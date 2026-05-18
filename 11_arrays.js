const evenSem = ["CSE_DS", "CSE_C", "CSE_H"]
const oddSem =  ["CSE_D", "CSE_I","CSE_F"]

evenSem.push(oddSem)
console.log(evenSem)

const allSections = evenSem.concat(oddSem)
console.log(allSections)

//Spread Operator(Important for interview), Used in industry
const allSection = [...evenSem, ...oddSem]
console.log(allSection)


const another_array = [[1,[2,3]],[4,5,6],[7],[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) //Take Infinity
console.log(real_another_array)