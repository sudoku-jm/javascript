//배열1

const numbers = [1,2,3,4]
const fruits = ['APPLE','Banana','Cherry']      //요소 element or 배열의 item

console.log(numbers[1])
console.log(fruits[2])      //인덱싱

console.log(numbers.length)
console.log(fruits.length)
console.log([1,2].length)        //2
console.log([].length)          //0



//.concat()

console.log(numbers.concat(fruits))     //원본데이터 훼손하지 않고 새로운 배열 반환
console.log(numbers)
console.log(fruits)


//.forEach()

fruits.forEach(function(fruit, index, array){
    console.log(fruit, index , array)
})

console.log('=========================')
//.map()

// const a = fruits.forEach(function(fruit, index){
//     console.log(`${fruit} - ${index}`)
// })

// console.log(a)

const a = fruits.forEach((fruit, index) =>{
    console.log(`${fruit} - ${index}`)
})

console.log(a)

// const b = fruits.map(function(fruit, index){
//     // return `${fruit} - ${index}`
//     return {
//         id : index,
//         name : fruit
//     }           //객체리터럴 방식
// })

const b = fruits.map( (fruit, index) => ({
        id : index,
        name : fruit
}) )

console.log(b)