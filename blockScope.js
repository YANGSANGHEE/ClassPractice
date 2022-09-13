//  함수 내부의 변수와 상수의 범위 알기 (처리를 단위로 분할하고 싶을때 , 변수/상수의 유효범위를 좁히고 싶을때)

// let과 const로 선언된 변수와 상수는 {}로 감싸진 범위의 블록 내에서만 사용할 수 있다.
// 변수와 상수가 유효한 범위를 스코프(Scope)라고 하며, {}로 감싸진 유효 범위를 블록스코프(Block Scope)라고 한다.

// case1
{
  const a = 20;
  {
    console.log(a); // 20 출럭
    {
      console.log(a); // 20출력
    }
  }
}

// case2
{
  {
    const b = 20;
  }
  // console.log(b); // 스코프를 벗어나서 에러 발생
}

// 블록은 함수, if문, for문등 여러곳에서 사용됨
// case1
function myFunc() {
  const myValue = '상희짱';
  function myFunc2() {
    console.log(myValue);
  }
  myFunc2();
}
myFunc(); // 상희짱 출력
// console.log(myValue); // 스코프를 벗어나서 에러 발생

// case2
if (true) {
  const mem = '연주짱';
}
console.log(mem); // 스코프를 벗어나서 에러발생
