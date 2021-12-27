// JS데이터

//String : "", '' , ``
//Number
//Boolead : true, false
//undefined
//null
//Array : []
//Object : {}


/* 
1. google 검색
>> string mdn
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String


*/

// const result = 'Hello world!'.indexOf('world')
// const result2 = 'Hello world!'.indexOf('Heropy')
// //String.prototye.indexOf()
// console.log(result)
// console.log(result2)


const str = '0123'  //문자데이터
console.log(str.length)
console.log('0123'.length)

const str2 = 'Hello world!'
console.log(str2.indexOf('world'))
console.log(str2.indexOf('HEROPY') !== -1)
console.log(str2.slice(0,3))
console.log(str2.slice(6,11))
console.log(str2.replace('world','Heropy'))
console.log(str2.replace(' world!',''))

const str3 = 'thesecon@gmail.com'
//정규표현식
console.log(str3.match(/.+(?=@)/))          //@뒤의 도메인 주소가 제거된 배열 데이터 
//@기호 앞에 있는 기호 일치
console.log(str3.match(/.+(?=@)/)[0])       //배열 데이터 첫번째만


const str4 = '      Hello world     '
console.log(str4)           //공백 존재
console.log(str4.trim())    //앞 뒤 공백 제거