//객체 
//  Obejct          https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object

// prototype이 붙었던 메소드 :[].reverse() 
//prototype이 붙어 있지 않는 메소드 = 정적 메소드 static
//Object.assign()


const userAge = {
    //key : value
    name : 'Heropy',
    age : 35
}

const userEmail = {
    name : 'Heropy',
    email : 'thesecon@gmail.com'
}

const target = Object.assign(userAge, userEmail)    //Object에 직접 사용하는 메소드이다.

console.log('target',target)
console.log('userAge',userAge)
// console.log('userEmail',userEmail)
console.log('target === userAge?',target === userAge)           //생긴게 같아서 true가 나온게 아니다. 같은 메모리 주소를 바라보고있으므로 true. 참조형 데이터!



const target2 = Object.assign({}, userAge)        //userAge손상하지 않고 복사하는 용도이다.
console.log('target2',target)                               //새로운 객체 데이터.
console.log('target2 === userAge?',target2 === userAge)          //false


const a = {k : 123}
const b = {k : 123}
console.log(a === b)        //생긴건 같아도 false이다. 다른 객체. 다른 메모리객체