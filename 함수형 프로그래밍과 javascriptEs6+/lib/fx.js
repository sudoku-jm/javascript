
const log = console.log;


//map , filter, reduce 함수 생성
// const map = (f, iter) => {
//     let res = [];
//     for (const a of iter) {
//       res.push(f(a));
//     }
//     return res;
//   };
  
//   const filter = (f, iter) => {
//     let res = [];
//     for (const a of iter) {
//       if (f(a)) res.push(a);
//     }
//     return res;
//   };
  
//   const reduce = (f, acc, iter) => {
//     if (!iter) {
//       iter = acc[Symbol.iterator]();
//       acc = iter.next().value;
//     }
//     for (const a of iter) {
//       acc = f(acc, a);
//     }
//     return acc;
//   };


  //curry
  const curry = f =>
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);
 //curry함수는 f 함수를 리턴한다. 인자를 받았는데 인자가 2개 이상일 경우 즉시 함수를 실행.f(a, ..._) 하고 그게 아닐 경우, 함수를 다시 리턴하는데 이후에 받은 인자를 합하여 실행(..._) => f(a, ..._)
 
const map = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
});

const filter = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
});

const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
});

  

