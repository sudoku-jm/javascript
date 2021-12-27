//전개 연산자 Spread

const fruits = ['Apple','Banana','Cherry','Orange']

console.log(fruits)
console.log(...fruits)  //Apple Banana Cherry 문자 데이터로 출력   => 전개 연산자
// 쉼표로 구분된 배열
//console.log( 'Apple','Banana','Cherry')  의 형태와 같다.

// function toObject(a,b,...c){    //나머지 아이템은 c로 들어가게.(rest parameter)
//     return{
//         a:a,
//         b:b,
//         c:c
//     }

//     //{a: 'Apple', b: 'Banana', c: Array(2)}

//     //a: "Apple"
//     //b: "Banana"
//     //c: (2) ['Cherry', 'Orange']
// }


//정리2
// function toObject(a,b,...c){ 
//     return{
//         a,b,c       //속성, 변수의 이름이 같으면 하나만 남긴다.
//     }

// }


//정리3
const toObject = (a,b,...c) => ({a,b,c})        //객체데이터를 화살표 내부에서 축약형으로 내보내기()안에 넣는다.


console.log(toObject(...fruits))                          //{a: 'Apple', b: 'Banana', c: 'Cherry'}
// console.log(toObject(fruits[0],fruits[1],fruits[2]))      //{a: 'Apple', b: 'Banana', c: 'Cherry'}