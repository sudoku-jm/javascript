/* 
omdapi
http://www.omdbapi.com/
The Open Movie Database
영화데이터 요청해서 받아오고 출력하기 실습!


Usage
Send all data requests to:
http://www.omdbapi.com/?apikey=[yourkey]&
해당 주소로 데이터 요청가능
apikey : 해당 키를 가지고 
yourkey : 사용자 인증을 통해 데이터를 받아낼 수 있다.


By Search

Parameter : 명령
Required : Yes 필수.
Description : 설명

ex) 
s라는 명령어는 Yes 필수이다.
Movie title to search for.
영화 제목을 통해서 검색하는 기능을 한다.


---
API key
http://www.omdbapi.com/apikey.aspx
이메일 인증을 통해 KEY를 얻을 수 있다.

----
http://www.omdbapi.com/?apikey=[yourkey]&s=제목

?물음표로 구분하고 &엔퍼센트로 나누는 것을 => Query String쿼리스트링 이라고 한다.

Query 검색
String 문자
문자를 가지고 무언가를 검색한다.

주소?속성=값&속성=값&속성=값
ex)주소?apikey=값&s=제목

쿼리스트링은?
특정한 주소로 접근할 때 기본적인 페이지에 대한 옵션을 명시하는 문자.
----
url주소부분에
http://www.omdbapi.com/?apikey=[yourkey]&s

발급받은 키를 입력해서 누르면
ex)
http://www.omdbapi.com/?apikey=285c915a&s=frozen

JSON파일이 출력된다.

{
    "Search": [
                {
                "Title": "Frozen",
                "Year": "2013",
                "imdbID": "tt2294629",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg"
                },
                ...등등등
}


JSON포맷의 정보라는 것을 확인할 수 있다.


------

웹페이지 자체의 데이터는 프로젝트에서 활용할 수 없다.
그래서 요청을 처리해줄 수 있는 자바스크립트 패키지를 활용한다.

axios (엑시오스) 패키지를 활용한다.
https://github.com/axios/axios

Promise based HTTP client for the browser and node.js
Node.js와 브라우저에서 사용할 수 있고 HTTP요청을 처리해주는 자바스크립트 패키지.

[설치]
Installing
> npm install axios

-D 개발의존성이 아닌 일반 의존성으로 설치한다.

개발서버가 켜져있으면 꺼주고 설치해준다.

package.json 을 보며 설치확인한다.

"dependencies": {
    "axios": "^0.24.0",
    "lodash": "^4.17.21"
  }

*/

import axios from 'axios'

function fetchMovies() {
    // axios.get('주소') 
    // get메소드를 가지고 OMDB API 페이지를 통해 가지고 왔던 주소를 가지고 데이터 가져온다. 
    // http://www.omdbapi.com/?apikey=285c915a&s=frozen

    //요청은 https를 통해서 해주는 것을 권장.
    //get().then() 메소드 체이닝
    axios
        .get('https://www.omdbapi.com/?apikey=285c915a&s=frozen')
        .then(res => {
            //res(response)라는 매개변수로 응답이라는 개념으로 반환.
            console.log(res)
            const h1El = document.querySelector('h1')
            const imgEl = document.querySelector('img')
            h1El.textContent = res.data.Search[0].Title
            imgEl.src = res.data.Search[0].Poster
        })
}

fetchMovies()

/* 
console창 확인
{data: {…}, status: 200, statusText: 'OK', headers: {…}, config: {…}, …}

data > search > Array(10)배열데이터로 ...확인가능

화면에 출력하고 싶음. => index.html 페이지 수정
*/


