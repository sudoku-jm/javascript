/* 메소드 체이닝 */

const a = 'Hello~'

/* 
    split : 문자를 인수 기준으로 쪼개서 배열로 반환.
    reverse : 배열을 뒤집기.
    join : 배열을 인수 기준으로 문자로 병합해 반환.
*/


//메소드 체이닝
const b = a.split('').reverse().join('')

console.log(a)
console.log(b)
