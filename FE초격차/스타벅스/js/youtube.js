// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {        //바꾸면 안되는 함수.
    //<div id="player"></div> 를 가리키는 요소를 찾음
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상 id
    playerVars : {
        autoplay :true, //자동 재생 유무
        loop : true,     //반복 재생 유무
        playlist : 'An6LvWQuj_8'    //반복 재생할 유튜브 영상 id 목록
    },
    events : {
        //영상이 준비가 되면 익명함수 실행
        onReady : function(event){   //onReady메소드. 익명함수. 메개변수 event 함수 인수.
            event.target.mute();    //음소거 처리
        }
    }
    
  });
}