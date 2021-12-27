const str = `
010-1234-5678
thesexon@gmail.com
https://www.omdbapi.com/?apikey=285c915a&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
    str.match(/.{1,}(?=@)/g)
    //.{1,}   : 1개 이상
    //(?=@)   : @앞쪽 일치 
)
/* 
[결과]
['thesexon']
*/


console.log(
    str.match(/(?<=@).{1,}/g)
    //.{1,}   : 1개 이상
    // (?<=@)  : @뒤쪽 일치 
)

/* 
[결과]
['gmail.com']
*/