
//`` 백틱 기호로 줄바꿈
const str = `
010-1234-5678
thesexon@gmail.com
https://www.omdbapi.com/?apikey=285c915a&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

//02. 리터럴 방식

/* 
/표현/옵션
/[a-z]/gi
*/
const regexp = /the/gi
console.log(str.match(regexp))
/* 출력
 ['the', 'The', 'the']
*/