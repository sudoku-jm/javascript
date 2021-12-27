/* 
Window.localStorage
https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage


localStorage 읽기 전용 속성을 사용하면 Document 출처의 Storage 객체에 접근할 수 있습니다. 저장한 데이터는 브라우저 세션 간에 공유됩니다

사이트에 종속되어 공유.

로컬스토리지
local storage
따로 지우지 않는 이상 데이터는 만료 되지않는다.

세션스토리지.
session storage
페이지 세션이 끝날 때, 사라지는 점

------
데이터 저장하기.
localStorage.setItem(key, value);
localStorage.setItem('myCat', 'Tom');   //문자 데이터로 저장.

//객체(Object) -> JSON(string)
const str = JSON.stringify(user)
과 같이 문자화 시켜서 저장.

//JSON(string) -> 객체(Object) 
const obj = JSON.parse(str)
//자바스크립트에서 사용하기 위해.객체화시켜서 다시 쓸 수 있다.

---
데이터 읽어오기.
const cat = localStorage.getItem(key);
const cat = localStorage.getItem('myCat');
key값만 알면 읽어올 수 있다.
---
데이터 제거하기.
localStorage.removeItem(key);
localStorage.removeItem('myCat');
key값으로 제거할 수 있다.
*/


// localstorage 확인하면서 실습.
// [F12] > Application > Local Storage >  http://localhost:1234/ 
// 실제 웹 주소에 종속이 되어 관리가 된다.
const user = {
    name : 'Heropy',
    age : 85,
    emails : ['test1@gmail.com','kakao@kakao.co.kr']
}


/*
localStorage.setItem('user',user)  

key : user
value : [object Object]
---
원하는 형태의 데이터로 저장되지 않았다.

문자 데이터로 변환하여 저장.

객체(Object) -> JSON(string)
JSON.stringify(user)    
*/

localStorage.setItem('user',JSON.stringify(user))  //2번째 인수로 문자화 시키고 저장.
/* 
key : user
value : {name: "Heropy", age: 85, emails: ["test1@gmail.com", "kakao@kakao.co.kr"]}

value값은 'Json형태의 문자 데이터'지만 
브라우저가 분석해서 '자바스크립트 데이터로 볼 수 있게'해놓음.
*/



//데이터 가져와 console출력
console.log(localStorage.getItem('user'))  
/* 
[출력]
{"name":"Heropy","age":85,"emails":["test1@gmail.com","kakao@kakao.co.kr"]}
잘 출력이 되었지만 문자형 데이터로 출력.

JSON(string) -> 객체(Object) 
JSON.parse(user)
 */
console.log(JSON.parse(localStorage.getItem('user')))
/* 
[출력]
age: 85
emails: (2) ['test1@gmail.com', 'kakao@kakao.co.kr']
name: "Heropy"
문자 데이터를 가져와 객체 데이터로 변환 시켜주었다.
*/


localStorage.removeItem('user')
/* 
위의 코드를 쭉- 실행하고 console에는 남아있지만
[F12] > Application > 지워졌다.
*/


