//this

// 일반(Normal)함수는 호출 위치에서 따라 this 정의!
// 화살표(Arrow)함수는 자신이 선언된 함수 범위에서 this 정의!

const heropy = {
    name : 'Heropy',
    normal : function(){
        console.log(this.name)          //Heropy
    },
    arrow : () => {
        console.log(this.name)          //undefined
    }
}

heropy.normal()
heropy.arrow()


const amy = {
    name : 'Amy',
    normal : heropy.normal,             //함수 자체가 amy.normal에 할당
    arrow : heropy.arrow
}

amy.normal()                            //Amy
amy.arrow()                             //undefined

console.log('===============')

//============


function User(name) {
    this.name = name
}

User.prototype.normal = function(){         //일반함수 = 호출 위치에서 this 정의
    console.log(this.name)
}

User.prototype.arrow = () =>{               //화살표 함수 = 자신이 선언된 함수 범위에서 this가 정의.
    console.log(this.name)
}

const heropy2 = new User('Heropy')

heropy2.normal()                //Heropy
heropy2.arrow()                 //undefined


console.log('===============')
//==============

const timer = {
    name : 'Heropy!!',
    timeout : function(){   //화살표 함수의 함수 범위이다.
        // setTimeout(함수,시간)
        // setTimeout(function(){
        //     console.log(this.name)  //undefined setTimeout 내부로직안에서 실행.
        // }, 2000)
        setTimeout(() => {
            console.log(this.name)  //Heropy!!      여기서 this 는 timer이다.
        }, 2000)
    }
}

timer.timeout()

// console.log('===============')