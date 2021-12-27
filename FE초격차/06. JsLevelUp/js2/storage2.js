//저장한 데이터를 수정하고 싶을 땐?

const user = {
    name : 'Heropy',
    age : 85,
    emails : ['test1@gmail.com','kakao@kakao.co.kr']
}


//localStorage.setItem('user',JSON.stringify(user)) 실행 후 [F12] > Application 확인.

const str = localStorage.getItem('user')    
//데이터를 가져온다.

const obj = JSON.parse(str) 
//가지고 온 데이터를 객체화 시켜 obj에 저장.

obj.age = 22        //데이터 수정
console.log(obj)    
/* 
{name: 'Heropy', age: 22, emails: Array(2)}
*/

localStorage.setItem('user',JSON.stringify(obj))    //다시 문자로 변환하여 저장.
/* 
{name: "Heropy", age: 22, emails: ["test1@gmail.com", "kakao@kakao.co.kr"]}
데이터가 갱신이 되었다.
*/
