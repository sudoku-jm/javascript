//.filter()

const numbers = [1,2,3,4]
const fruits = ['Apple','Banana','Cherry']

console.log("===========filter=============")
// const a = numbers.map(number => { return number <3 })
const a = numbers.map(number => number <3 )
console.log(a)

const b = numbers.filter(number => number < 3)
console.log(b)



console.log("==========find,findIndex==============")

//.find() , .findInxex()

// const c = fruits.find(fruit => { return /^B/.test(fruit)})
const c = fruits.find(fruit =>  /^B/.test(fruit))
// const d = fruits.find(fruit => { return /^C/.test(fruit)})
const d = fruits.find(fruit => /^C/.test(fruit))
console.log(c)
console.log(d)

//정규표현식
///^B/ B로 시작하는 문자 데이터

// const e = fruits.findIndex(fruit => { return /^C/.test(fruit)})
const e = fruits.findIndex(fruit => /^C/.test(fruit))
console.log(e)


console.log("=============includes===========")
//.includes()

const f = numbers.includes(3)
console.log(f)

const g = fruits.includes('HEROPY')
console.log(g)



console.log("=============push,unshift===========")

//.push() , .unshift()
//원본 수정된 주의

numbers.push(5)                 //맨 뒤 삽입
console.log(numbers)

numbers.unshift(0)              //맨 앞 삽입
console.log(numbers)


console.log("=============reverse===========")
//.reverse()
//원본 수정됨 주의

numbers.reverse()
fruits.reverse()

console.log(numbers)
console.log(fruits)


console.log("=============splice===========")
//.splice()
// 원본 수정됨 주의

//[5, 4, 3, 2, 1, 0]
numbers.splice(2,1)     //index번호 2번부터 1개 지워라.
console.log(numbers)    //[5, 4, 2, 1, 0]

numbers.splice(2,0,999) //index번호 2번부터 아무것 도 지우지 않고 999데이터 추가     
console.log(numbers)    //[5, 4, 999, 2, 1, 0]

numbers.splice(2,1,50)  //index번호 2번부터 아이템 하나 지우고 50 데이터 추가
console.log(numbers)   // [5, 4, 50, 2, 1, 0]       데이터 새로 교체

fruits.splice(2,0,'Orange')
console.log(fruits) //['Cherry', 'Banana', 'Orange', 'Apple']