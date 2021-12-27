/* 
JSON(JavaScript Object Notation) 자바스크립트의 객체 표기법

위키백과
https://ko.wikipedia.org/wiki/JSON

JSON의 기본 자료형은 다음과 같다:

-수(Number)
-문자열(String): 0개 이상의 유니코드 문자들의 연속. 문자열은 큰 따옴표(")로 구분하며 역슬래시 이스케이프 문법을 지원한다.
-참/거짓(Boolean): true 또는 false 값
-배열(Array): 0 이상의 임의의 종류의 값으로 이루어진 순서가 있는 리스트. 대괄호로 나타내며 요소는 쉼표로 구분한다.
-객체(Object): 순서가 없는 이름/값 쌍의 집합으로, 이름(키)이 문자열이다.
-null: 빈 값으로, null을 사용한다.

*/
import myData from './myData.json'      //js파일 제외 json파일은 확장자명 명시한다.

console.log('myData',myData)
/* 객체 데이터로 변환되어 출력. 하지만 JSON파일은 문자(string) 데이터다.
{string: 'HEROPY', number: 123, boolean: true, null: null, object: {…}, …}
*/

const user = {
    name : 'HEROPY',
    age : 60,
    emails : [
        'thesecon@gmail.com',
        'neo@zillins.com'
    ]
}
console.log('user',user)
console.log(typeof user)    //object


//객체(Object) -> JSON(string)
const str = JSON.stringify(user)
console.log('str',str)
/* str {"name":"HEROPY","age":60,"emails":["thesecon@gmail.com","neo@zillins.com"]} */
console.log(typeof str) //string


//JSON(string) -> 객체(Object) 
//자바스크립트에서 사용하기 위해.객체화.
const obj = JSON.parse(str)
console.log('obj',obj)