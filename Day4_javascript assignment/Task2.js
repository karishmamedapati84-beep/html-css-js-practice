let sample = [1, 2, 3, 4, 5, 6]
console.log(sample)

const myn1 = sample.slice(1,4)
console.log(myn1)

const myn2 = sample.splice(1,4)
console.log(myn2)

//slice means if the index is (1,4) it will include the elements from index 1 to 3. In case of splice it will include (1,4) index elements.