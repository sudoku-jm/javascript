/* 
lodash 검색
https://lodash.com/
https://lodash.com/docs/4.17.15

lodash에서 유용하게 사용 할 수 있는 메소드 
*/


/*
_.uniq
https://lodash.com/docs/4.17.15#uniq
: 배열 데이터에서 중복 제거 고유한 것 만 출력

(예)
_.uniq([2, 1, 2]);
// => [2, 1]

*/


import _ from 'lodash'          //기본통로를 통해 가져옴. From 'node_modules'

const userA = [
    {userId : '1', name : 'HEROPY'},
    {userId : '2', name : 'Neo'}
]
const userB = [
    {userId : '1', name : 'HEROPY'},
    {userId : '3', name : 'Amy'}
]
const userC = userA.concat(userB)   //A와 B를 합친다.
console.log('concat',userC)
/* 
0: {userId: '1', name: 'HEROPY'}
1: {userId: '2', name: 'Neo'}
2: {userId: '1', name: 'HEROPY'}
3: {userId: '3', name: 'Amy'}
*/

console.log('uniqBy',_.uniqBy(userC,'userId'))  //_.uniqBy(중복 데이터가 들어있는 배열데이터 , 중복 구분할 속성)
/* 
0: {userId: '1', name: 'HEROPY'}
1: {userId: '2', name: 'Neo'}
2: {userId: '3', name: 'Amy'}

_.uniqBy
https://lodash.com/docs/4.17.15#uniqBy

이미 중복이 발생한 배열 데이터에서 사용.
*/

const userD = _.unionBy(userA, userB, 'userId') //두 개의 배열을 합치면서 중복 제거.
console.log('unionBy',userD)
/* 
0: {userId: '1', name: 'HEROPY'}
1: {userId: '2', name: 'Neo'}
2: {userId: '3', name: 'Amy'}

_.unionBy
중복 되기 전. 합치기 전 배열 데이터에서 사용.
*/