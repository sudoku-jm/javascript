/* 
lodash 검색
https://lodash.com/
https://lodash.com/docs/4.17.15

lodash에서 유용하게 사용 할 수 있는 메소드 
*/
import _ from 'lodash'

const users = [
    { userId : '1', name : 'HEROPY'},
    { userId : '2', name : 'Neo'},
    { userId : '3', name : 'Amy'},
    { userId : '4', name : 'Evan'},
    { userId : '5', name : 'Lewis'},
]


const foundUser = _.find(users,{name : 'Amy'})
const foundUserIndex = _.findIndex(users, {name : 'Amy'})
console.log(foundUser)
/* Object 출력
{userId: '3', name: 'Amy'}

_.find : 배열 데이터에서 원하는 속성 객체 데이터 반환
*/
console.log(foundUserIndex)
/* index 출력
2

_.findIndex : 배열 데이터에서 객체 데이터 Index 반환
*/

_.remove(users,{name : 'HEROPY'})
console.log(users)
/* 
0: {userId: '2', name: 'Neo'}
1: {userId: '3', name: 'Amy'}
2: {userId: '4', name: 'Evan'}
3: {userId: '5', name: 'Lewis'}

_.remove : 속성 해당하는 객체 데이터 없애기
*/