//데이터 불변성(immutability)
//원시 데이터 : String, Number, Boolean, undefined, null
//참조형 데이터 : Object, Array, Function           //콜백도 함수처럼 참조할 수 있으므로

/* 
<메모리 주소 번호>
1 :             | 2 :               |3:             | 4:            |
*/

let a = 1
let b = 4
console.log(a,b,a===b)          //1 4 false


b = a
console.log(a,b,a===b)          //1 1 true      a,b 메모리 주소가 같다.


a = 7
console.log(a,b,a===b)          //7 1 false

let c = 1
console.log(b,c, b===c)         //7 1 false

// 원시 데이터는 기본적으로 불변성이다. 데이터가 변하지 않는 성질.
// 그래서 생긴게 다르면 다른 데이터다.


//참조형 데이터 메모리사용?





