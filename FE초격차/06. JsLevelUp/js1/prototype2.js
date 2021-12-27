function User(first , last) {//생성자 함수 첫글자 대문자(파스칼 케이스)
    this.firstName = first
    this.lastName = last
}

User.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

const heropy = new User('Heropy','Park')
const amy = new User('Amy','Clarke')
const neo = new User('Neo','Smith')

console.log(heropy.getFullName())
console.log(amy)
console.log(neo)
