//ES6 Classes

const heropy = {
    name : 'Heropy',
    normal(){       //축약해서 사용가능.function키워드로 만들어진 일반함수 패턴과 동일하다.
        console.log(this.name)
    },
    arrow : () => {
        console.log(this.name)
    }
}


// heropy.normal()
// heropy.arrow()


console.log(`==========================================`)
//=============

// function User(first , last) {//생성자 함수 첫글자 대문자(파스칼 케이스)
//     this.firstName = first
//     this.lastName = last
// }

// User.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`
// }

//==> Class문법으로 변경

class User {
    constructor(first, last){   //생성자 함수
        this.firstName = first
        this.lastName = last
    }
    getFullName() {             //prototype으로 만들어지는 매소드 정의.
        return `${this.firstName} ${this.lastName}`
    }
}


const heropy2 = new User('Heropy2','Park')
const amy = new User('Amy','Clarke')
const neo = new User('Neo','Smith')


console.log(heropy2.getFullName())          //Heropy2 Park
console.log(amy)
console.log(neo)
