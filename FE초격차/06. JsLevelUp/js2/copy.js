import _ from 'lodash'      //_언더바로 쓸 것을 권고중.

//얕은 복사 (Shallow copy) , 깊은 복사(Deep copy)

const user = {
    name :'Heropy',
    age : 85,
    emails : ['thesecon@gmail.com']
}

// const copyUser = user                       //같은 메모리 주소 바라본다.       ==  깊은 복사
// const copyUser = Object.assign({}, user)       //user를 손상하지 않고 복사해서 반환
// const copyUser ={...user}          //{}새로운 객체 데이터 할당. 새로운 메모리 주소 할당.Object.assign과 같은 효과       == 얕은 복사
const copyUser = _.cloneDeep(user)      //lodash사용. 깊은 복사  
console.log(copyUser === user)              //true

user.age = 32
console.log('user :' , user)            //{name: 'Heropy', age: 32, emails: Array(1)}
// console.log('copyUser : ',copyUser)     //{name: 'Heropy', age: 32, emails: Array(1)}
console.log('copyUser : ',copyUser)     //{name: 'Heropy', age: 85, emails: Array(1)}           //copyUser는 손상되지않음.

console.log('-------------------')
console.log('-------------------')

user.emails.push('neo@gmail.com')
console.log(user.emails === copyUser.emails)            //true
//emails는 따로 복사한 적 없으니 같은 메모리주소 바라보는 것.
//
// console.log('user',user)
/* 
ge: 32
emails: (2) ['thesecon@gmail.com', 'neo@gmail.com']                    얕은 복사 시 메일이 동일.
name: "Heropy"
*/
// console.log('copyUser',copyUser)
/* 
age: 85
emails: (2) ['thesecon@gmail.com', 'neo@gmail.com']                     얕은 복사 시 메일이 동일.
name: "Heropy"
 */

//이럴 때 필요한 것이 깊은 복사.
//lodash 패키지 사용!

/* 
[설치]
npm i lodash


  "dependencies": {
    "lodash": "^4.17.21"
  }


*/


console.log('user',user)
/* 
age: 32
emails: (2) ['thesecon@gmail.com', 'neo@gmail.com']     //깊은 복사
name: "Heropy"
*/
console.log('copyUser',copyUser)
/* 
age: 85
emails: ['thesecon@gmail.com']        //깊은 복사(재귀함수를 이용한 복사)
name: "Heropy"
*/



/* 

lodash

https://lodash.com/


https://lodash.com/docs/4.17.15#cloneDeep


(ex)
var objects = [{ 'a': 1 }, { 'b': 2 }];
 
var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false
바라보는 메모리 주소가 다르니 false


참고 블로그
https://velog.io/@th0566/Javascript-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%AC-%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%AC

*/



/* 
<재귀함수를 이용한 깊은 복사>
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

function copyObj(obj) {
  const result = {};

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      result[key] = copyObj(obj[key]);
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}

const copiedObj = copyObj(obj);

copiedObj.b.c = 3

obj.b.c === copiedObj.b.c //false 

*/