
//`` 백틱 기호로 줄바꿈
const str = `
010-1234-5678
thesexon@gmail.com
https://www.omdbapi.com/?apikey=285c915a&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

//03.메소드

/* 
test
정규식.test(문자열)

match
문자열.match(정규식)

replace
문자열.replace(정규식,대체문자)
*/

const regexp = /fox/gi
console.log(str.match(regexp))
/* 출력
['fox']
*/

console.log(regexp.test(str))
/* 출력
true
*/

const regexp2 = /heropy/gi
console.log(regexp2.test(str))
/* 출력
false
 */

console.log(str)
console.log(str.replace(regexp,'AAA'))
/* 출력
010-1234-5678
thesexon@gmail.com
https://www.omdbapi.com/?apikey=285c915a&s=frozen
The quick brown AAA jumps over the lazy dog.
abbcccdddd

fox단어가 AAA로 대체
*/

//원본 데이터에 재할당은 상수가 아닌 변수로 선언해야 한다.
let str2 = `
010-1234-5678
thesexon@gmail.com
https://www.omdbapi.com/?apikey=285c915a&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
str2 = str2.replace(regexp,'재할당!!!!')
console.log(str2)
/* 출력
010-1234-5678
thesexon@gmail.com
https://www.omdbapi.com/?apikey=285c915a&s=frozen
The quick brown 재할당!!!! jumps over the lazy dog.
abbcccdddd
 */