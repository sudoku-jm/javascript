const str = `
010-1234-5678
thesexon@gmail.com
https://www.omdbapi.com/?apikey=285c915a&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
d
`

/* 
^ab | 즐(Line) 시작에 있는 ab와 일치
ab$ | 줄(Line) 끝에 있는 ab와 일치
*/
console.log(
    str.match(/d$/g)
    //한 줄의 끝부분이 알파벳 d로 끝나는 것을 찾기
)
/* 
[결과]
null

줄 바꿈 되는 부분은 무시되었다.
*/


console.log(
    str.match(/d$/gm)
    //멀티라인 옵션 추가하면 모든 줄 시작 끝부분 검색.
)
/* \
[결과]
['d', 'd']
*/


console.log(
    str.match(/^t/gm)
    //특정 줄 t라는 알파벳으로 시작하는 글 찾기
    //소문자 t
)
/* 
[결과]
['t']
*/

console.log(
    str.match(/^t/gim)
    //대소문자 가리지 않고 t
)
/* 
[결과]
['t', 'T']
*/

console.log(
    str.match(/h..p/g)
)
/* 
[결과]
['http']
*/

console.log(
    str.match(/fox|dog/g)
)
/* 
[결과]
['fox', 'dog']
*/

console.log(
    str.match(/https?/g)
)
//?물음표 앞에 있는 글자가 있을 수도 있고, 없을 수도 있는 것 찾기
/* 
[결과]
['https', 'http']
*/


console.log(
    str.match(/d{2}/g)
    //2개 이상 일치 
)
/* 
[결과]
['dd', 'dd']
2번 연속
*/

console.log(
    str.match(/d{2,}/g)
    //d가 2개 연속으로 일치하는것을 모두 찾는다
)
/* 
[결과]
['dddd']
*/

console.log(
    str.match(/d{2,3}/g)
    //d가 2개이상 3개 이하 연속 일치 모두 찾는다
)
/* 
[결과]
['ddd']
*/

console.log(
    str.match(/\w{2,3}/g)
    //숫자를 포함한 영어까지 모두 2개이상 3개이하
)
/* 
[결과]
['010', '123', '567', 'the', 'sex', 'on', 'gma', 'il', 'com', 'htt', 'ps', 'www', 'omd', 'bap', 'com', 'api', 'key', '285', 'c91', '5a', 'fro', 'zen', 'The', 'qui', 'ck', 'bro', 'wn', 'fox', 'jum', 'ps', 'ove', 'the', 'laz', 'dog', 'abb', 'ccc', 'ddd', 'htt', 'loc', 'alh', 'ost', '123']
*/

console.log(
    str.match(/\b\w{2,3}\b/g)
    //숫자를 포함한 영어까지 모두 2개이상 3개이하 단어들만
    
)
/* 
[결과]
['010', 'com', 'www', 'com', 'The', 'fox', 'the', 'dog']
*/