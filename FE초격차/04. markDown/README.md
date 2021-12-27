# 제목(Header)

# 제목 1
## 제목 2
### 제목 3
#### 제목 4
##### 제목 5
###### 제목 6

# 문장(Paragraph)

동해물과 백두산이 마르고 닳도록
하느님이 보우하나 우리나라 만세

# 줄바꿈 (Line Breaks)
- 띄어뜨기 두 번 하면 줄바꿈 됨.
- 또는 br 태그 사용

동해물과 백두산이 마르고 닳도록  
하느님이 보우하나 우리나라 만세<br/>
무궁화 삼천리 화려 강산  
대한 사람 대한으로 길이 보전하세


# 강조(Emphasis)

_이텔릭_  
**두껍게**  
**_이텔릭 + 두껍게_**  
~~취소선~~  
<u>밑줄</u>

# 목록(List)

1. 순서가 필요한 목록
1. 순서가 필요한 목록
1. 순서가 필요한 목록
    1. 순서가 필요한 목록
    1. 순서가 필요한 목록
       1. 순서가 필요한 목록
1. 순서가 필요한 목록

- 순서가 필요하지 않은 목록
- 순서가 필요하지 않은 목록
- 순서가 필요하지 않은 목록
    - 순서가 필요하지 않은 목록
    - 순서가 필요하지 않은 목록
      - 순서가 필요하지 않은 목록
- 순서가 필요하지 않은 목록

# 링크(Links)

<a href="https://google.com" title="설명!">GOOGLE</a>  
[GOOGLE](https://google.com "설명!")

<a href="https://google.com" title="설명!" target="_blank">GOOGLE</a>  

# 이미지 (Images)

![]()  

![sudoku.pe.kr](http://sudoku.pe.kr/layouts/pp2021/images/common/logo.png)  

[![sudoku.pe.kr](http://sudoku.pe.kr/layouts/pp2021/images/common/logo.png)](https://sudoku.pe.kr)


# 인용문 (BlockQuote)

> 남의 말이나 글에서 직접 또는 간접으로 따온 문장.  
> (네이버 국어 사전)

> 인용문을 작성하세요!
>> 중첩된 인용문
>>> 중중첩
>>>> 중중중첩!
>>>>> 중~~~~~첩!!

# 인라인(inline) 코드 강조

css에서 `background` 혹은 
`background-image` 속성으로 요소에 배경 이미지를 삽입할 수 있다.

# 블록(block) 코드 강조

```html
<a href="https://google.com" title="설명!" target="_blank">GOOGLE</a>  
```

```css
.list > li {
    position:absolute;
    top:40px;
}
```

```javascript
function func(){
    var a = 'AAA';
    return a;
}
```

```bach
$ git commit -m 'Study Markdown'
```

```plaintext
동해물과 백두산이 마르고 닳도록  
하느님이 보우하나 우리나라 만세
```

# 표(Table)

position 속성

값 | 의미 | 기본값
--|:--:|--:
static | 기준 없음 | O
relative | 요소 자신 | X
absolute | 위치 상 부모 요소 | X
fixed | 뷰포트 | X

# 원시 HTML(Raw HTML)

동해물과 <sapn style="text-decoration:underline">백두산</sapn>이 마르고 닳도록<br/>
하느님이 보우하나 우리나라 만세

<a href="https://google.com" title="설명!" target="_blank">GOOGLE</a>

---

<img width="100" src="http://sudoku.pe.kr/layouts/pp2021/images/common/logo.png" alt="SUDOKU">

# 수평선(Horizontal Rule)
---
***
___
