// console.log('hi')

const boxEl = document.querySelector('.box')

boxEl.classList.add('active')                           // class active 추가
let isContains = boxEl.classList.contains('active')     //active 클래스 포함되어있는지 체크
console.log(isContains);                                //active 값이 있으면 true

boxEl.classList.remove('active')                        // class active 제거
isContains = boxEl.classList.contains('active')         
console.log(isContains);                                //active 값이 없으면 false