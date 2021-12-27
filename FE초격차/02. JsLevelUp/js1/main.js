// import random from './getRandom'

//조건문

// const a = random()

// if( a === 0 ){
//     console.log('a is 0')
// }else if( a === 2){
//     console.log('a is 2')
// }else{
//     console.log('rest...')
// }


// const ulEl = document.querySelector('ul')

// for( let i = 0; i < 10; i += 1){
//     const li = document.createElement('li')
//     li.textContent = `list-${i + 1}`
    
//     if((i+1) % 2 == 0){
//         li.addEventListener('click',function(){
//             console.log(li.textContent)
//         });

//     }
//     ulEl.appendChild(li)
// }


// function scope(){
//     if(true){
//         const a = 123
//         console.log(a)
//     }
//     // console.log(a)
// }

// scope()


//즉시실행함수. 이름없는 익명함수
// 함수를 만들자마자 바로 실행

(function(){
    console.log('test!!즉시실행')
})();

(function(){
    console.log('test!!즉시실행')
}());


//호이스팅
//함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const a = 7;

double()

//불가능
// const double = function() {
//     console.log(a*2)
// }

//가능 : 함수 선언.
function double() {
    console.log(a*2)
}



//타이머 함수
//setTimeout(함수, 시간) : 일정 시간 후 함수 실행
//setInterval(함수, 시간) : 시간 간격마다 함수 실행
//clearTimeout() : 설정된 Timeout함수를 종료
//clearInterval() : 설정된 Interval 함수를 종료

// const timer = setTimeout(() => { 
//     console.log('Hi!!')
// },3000);


// const h1El = document.querySelector('h1')

// h1El.addEventListener('click',() =>{
//     clearTimeout(timer)
// });


// const timer2 = setInterval(() => { 
//     console.log('Hi!!')
// },3000);


// const h1El2 = document.querySelector('h1')

// h1El2.addEventListener('click',() =>{
//     clearInterval(timer2)
// });



// //콜백함수 (Callback)
//함수의 인수로 사용되는 함수

//setTimeout(함수, 시간)


function timeout (cb) {
    setTimeout(() => {
        console.log('heropy!!')
        cb()    //실행위치 보장
    }, 3000);
}

//콜백
// timeout() 함수를 이용!
timeout(() =>{
    console.log('Done!')
})




