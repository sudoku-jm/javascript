//숫자와 수학

const pi = 3.14159265358979
console.log(pi)

const str = pi.toFixed(2)       //Number.prototype.toFixed() 고정 소수점 표기법 사용. 소수점 2자리만 남기고 나머지 제거
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
console.log(str)
console.log(typeof str)         //반환 값 : 고정 소수점 표기법을 사용하여 주어진 숫자를 나타내는 문자열(string)입니다.

const integer = parseInt(str)           //정수만 추출. (Number)
const float = parseFloat(str)           //소수점 자리 유지하면서 숫자로 변환
console.log(integer)
console.log(float)
console.log(typeof integer, typeof float)         //number number 

//===============================
console.log('================================')
console.log('abs : ', Math.abs(-12))        //12
console.log('min : ',Math.min(2,8))         //2
console.log('max : ',Math.max(2,8))         //8
console.log('ceil : ',Math.ceil(3.14))         //4      정수단위 올림
console.log('floor : ',Math.floor(3.14))        //3     정수단위 내림
console.log('round : ',Math.round(3.14))        //3     정수기준 반올림
console.log('round : ',Math.round(3.5))        //4     정수기준 반올림
console.log('random : ',Math.random())          //?     난수 반환
console.log(Math.floor(Math.random() * 10))     //js1 / getRandom.js 참고