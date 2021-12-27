/* 가져오기 , 내보내기 */
import _ from 'lodash'                          //From 'node_modules'
import chkType from '../js1/getType'            //getType.js          //이름 바뀌어도 문제 없다.
import getRandom from '../js1/getRandom'        //getRandom.js
// import {random,user as Heropy} from './getRandom'              //{이름} 중괄호로 묶어서 함수를 가져와서 쓴다.
//random과 user를 한번에 불러오기 모든 export 파일을 가져오기.gi
import *as R from './getRandom'         //as 뒤에 이름은 원하는 이름
//* 와이드 카드

console.log(_.camelCase('the hellow world'))
console.log(chkType([1,2,3]))     
console.log(getRandom(), getRandom())
// console.log(random(), random())
// console.log(user)
// console.log(Heropy)     //Heropy로 user를 부르겠다.
console.log(R)              //한번에 가져오기
/* 
random: ƒ random()
user: {name: 'Heropy', age: 70}
__esModule: true
*/


/* 
default
기본 통로로 데이터를 빠져나간다.
이름 없어도 됨
하나의 모듈에서 default로 내보내기는 한 번만 가능.


이름을 지정할 땐
한 모듈에서 여러개 지정 가능 가능
export function random(){
    return Math.floor(Math.random() * 10)
}
export const user = {
    name : 'Heropy',
    age : 70
}
{이름,이름2} 중괄호로 묶어서 가져와서 쓴다.
*/
