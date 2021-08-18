
//.box 클래스 가진 요소 모두 찾음
const boxEls = document.querySelectorAll('.box')
// console.log(boxEls)

// 찾은 요소들 반복해서 함수 실행!
// 익명 함수를 인수로 추가!
boxEls.forEach(function(){ })


// 첫 번째 매개변수 boxEl : 반복 중인 요소
// 두 번째 매개변수 index : 반복 중인 번호
boxEls.forEach(function(boxEl,index){ })

boxEls.forEach(function(boxEl,index){ 
    boxEl.classList.add(`order-${index + 1}`)
    console.log(index,boxEl)
})