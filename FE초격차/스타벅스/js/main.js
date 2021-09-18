const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});



/* badge scroll event */
const badgeEl = document.querySelector('header .badges');

// window.addEventListener('scroll',function(){
//     console.log('scroll!!');
// });
//스크롤 할 때 마다 몇 십개씩 실행된다. 브라우저 부하가 심하다.


//lodash 자바스크립트 라이브러리. : _.throttle() 메소드 사용
window.addEventListener('scroll', _.throttle(function(){
    // console.log(window.scrollY);
    // 0.3초 단위로 부하를 줘서 한꺼번에 실행하여 브라우저 부하 막음.
    // 스크롤 이벤트 사용 할 때 많이 사용 됨.
    // 사용법
    //_.throttle(함수, 시간)

    if(window.scrollY > 500){
        //scrollY 속성 값 갱신될 때 마다 위치 파악하기
        //배지 숨기기
        // badgeEl.style.display = 'none'

        // gsap사용방법
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, 0.6, {
            //객체 데이터 형식
            opacity : 0 ,        // 0.6초마다 점점 투명해짐
            display : 'none'
        });
    }else{
        //500이하인 경우?
        //배지 보이기
        // badgeEl.style.display = 'block'
        gsap.to(badgeEl, 0.6, {
            //객체 데이터 형식
            opacity : 1 ,       // 0.6초마다 점점 보임
            display : 'block'
        });
    }
},300)); 



/* VISUAL */
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl,index){ 
    // 각 순차적으로 실행하는 요소의 이름은 fadeEl로 지정, index받아옴
    
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(fadeEl, 1, {
        //순차적으로 하나 씩 실행하기 위해 delay로 명시
        delay : (index + 1) * 0.7,  //각 요소 순서 index 0.7초, 1,4초..후 실행
        opacity:1
    });
});

/* NOTICE */
//new 자바스크립트 생성자(클래스)
// new  Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction : 'vertical',
    autoplay : true,
    loop : true
});
new Swiper('.promotion .swiper-container', {
    // direction : 'horizontal',       //기본값
    slidesPerView : 3,                 // 한번에 보여줄 슬라이드 개수
    spaceBetween : 10,                 // 슬라이드 사이 여백
    centeredSlides : true,              // 1번 슬라이드가 가운데 보이기
    loop : true,
    autoplay : {
        delay : 3000
    },
    pagination : {
        el : '.promotion .swiper-pagination',   // 페이지 번호 요소 선택자
        clickable : true,  //사용자의 페이지 번호 요소 제어 가능 여부, 사용자가 제어가능    
    },
    navigation : {
        prevEl : '.promotion .swiper-prev',
        nextEl : '.promotion .swiper-next'
    }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',function(){
    isHidePromotion = !isHidePromotion      //반대 값으로 만들어준다.
    if(isHidePromotion){
        // 숨김 처리!
        promotionEl.classList.add('hide');
    }else{
        // 보임 처리!
        promotionEl.classList.remove('hide');
    }
});



function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector, delay, size){

// gsap.to(요소, 지속시간, 옵션);
 gsap.to(
     selector,              // 선택자
     random(1.5 , 2.5),      // 애니메이션 동작 시간
     {                      // 옵션
        y : size,
        repeat : -1, //무한반복
        yoyo : true, //한번 재생된 애니메이션을 거꾸로 재생
        ease: Power1.easeInOut, //움직임 조정
        delay: random(0, delay)   //몇 초 뒤에 애니메이션 실행할지
    }
 );
}

floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);










