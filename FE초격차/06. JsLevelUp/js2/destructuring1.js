
// 구조 분해 할당(Destructuring assigment)   = 비구조화 할당

const user = {
    name : 'Heropy',
    age : 35,
    email : 'test@gamil.com',
    address : 'USA'
}


//구조 분해해서 내가 원하는 속성만 꺼내서 쓸 수 있게 함
// const {name , age, email, address} = user
// const {name , age } = user
const {name , age , address = 'Korea'} = user
//E.g, user.address
//address = 'Korea' 기본값 지정. 할당

const heropy = name     //이름이 맘에 안들면 원하는 변수이름 명시 가능.

console.log(`사용자의 이름은 ${name}입니다.`)
console.log(`${name}의 나이는 ${age}세 입니다.`)
console.log(`${heropy}의 이메일 주소는 ${user.email}입니다.`)
console.log(user.address)        //USA
console.log(address)        //USA         Korea 데이터는 무시.


console.log(`=======================`)
const fruits = ['Apple','Banana','Cherry']
const [,b] = fruits            //배열데이터로 지정한건 순서대로 지정.
// console.log(a,b,c,d)        //Apple Banana Cherry undefined
console.log(b)                  //Banana