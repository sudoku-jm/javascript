export default function (data) {
    return Object.prototype.toString.call(data).slice(8,-1)
}


/* 
default
기본 통로로 데이터를 빠져나간다.
이름 없어도 됨
*/


// export default 123               
//하나의 모듈에서 default로 내보내기는 한 번만 가능.