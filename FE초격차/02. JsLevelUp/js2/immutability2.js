//데이터 불변성(immutability)
//원시 데이터 : String, Number, Boolean, undefined, null
//참조형 데이터 : Object, Array, Function           //콜백도 함수처럼 참조할 수 있으므로

//참조형 데이터 메모리사용?

let a = { k : 1}
let b = { k : 1}
console.log(a,b,a==b)   //{k: 1} {k: 1} false           생긴게 같아도 메모리 주소는 다르다.


a.k = 7
b = a
console.log(a,b,a===b)  //{k: 7} {k: 7} true            메모리가 같다.

a.k = 2
console.log(a,b,a===b)  //{k: 2} {k: 2} true            b는 a를 바라보고 있으므로 메모리가 같다.


let c = b
console.log(a,b,c, a===c)  //{k: 2} {k: 2} {k: 2} true         c는 b를 바라보고 b는 a를 바라본다. 메모리가 같다.


a.k = 9
console.log(a,b,c,a===c)    //{k: 9} {k: 9} {k: 9} true         같은 메모리 주소를 바라보므로 true

//메모리의 참조 주소만 옮겨간다.