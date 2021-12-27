
const user = {
    //key : value
    name : 'Heropy',
    age : 35,
    email : 'thesecon@gmail.com'
}


const keys = Object.keys(user)
console.log(keys)   //['name', 'age', 'email']

console.log(user['email'])  //thesecon@gmail.com

const values = keys.map( key => user[key] )  //인덱싱 방법을 이용한다. keys[0] keys[1] 과 같이
//user[name]   user[age]    user[email]
console.log(values) //['Heropy', 35, 'thesecon@gmail.com']