
//`` 백틱 기호로 줄바꿈
const str = `
010-1234-5678
thesexon@gmail.com
https://www.omdbapi.com/?apikey=285c915a&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`


const regexp = /the/
console.log(str.match(regexp))
/* 결과
 처음 매치된 index 반환
*/

const regexp2 = /the/g
console.log(str.match(regexp2))
/* 결과
모든 매치된 문자 배열로 반환
 */

const regexp3 = /the/gi
console.log(str.match(regexp3))
/* 결과
대소문자 구분 않고 모든 매치된 문자 배열로 반환
 */

//리터럴 방식으로 바로 출력해도 반환됨
console.log(str.match(/the/gi))


console.log(str.match(/\./gi))
/* 
정규식에서 .(마침표))는 특정한 문자기호를 검색하는 패턴이다.

일반적인 문자로 해석하라고 \(백슬래시)를 붙여 
이스케이프(Escape Character)로 만든다.
(모든 기호가 되는건 아니고 정규표현식의 기능으로 해석되는 특수기호만 된다.)

*이스케이프(Escape Character)?
\(백슬래시) 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자를 말한다.

*/

console.log(str.match(/\.$/gi))
/* 
문자 기호가 끝나는 앞 부분 출력

` 백틱기호가 끝나는 앞부분이 문자 데이터가 끝나는 부분 이므로

결과 : null
*/


console.log(str.match(/\.$/gim))
/* 
m(mulit line)이라는 플래그을 붙여주면 
모든 줄의 .으로 끝나는게 일치되는 
각각의 .출력

결과 : [.]
일치된 하나의 마침표가 배열로 출력

m : 각각의 줄의 시작과 끝부분을 검색하겠다.
*/