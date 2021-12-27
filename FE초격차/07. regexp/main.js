
//`` 백틱 기호로 줄바꿈
const str = `
010-1234-5678
thesexon@gmail.com
https://www.omdbapi.com/?apikey=285c915a&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the','')
// console.log(str.match(regexp))

// const regexp = new RegExp('the','g')
// console.log(str.match(regexp))
//g 플래그를 사용해 문장에서 the라는 글자가 몇 번 사용 되었는지 확인이 되며 배열로 반환.
/* [출력]
 ['the', 'the']
*/


const regexp = new RegExp('the','gi')
console.log(str.match(regexp))
//대소문자 구분 안함
/* [출력]
 ['the', 'The', 'the']
*/