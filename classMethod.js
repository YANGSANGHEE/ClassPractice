//클래스에서 메서드 사용(클래스에서 메서드를 사용하고 싶을때)
//메서드명(){처리내용} =>멤버함수 정의

// 클래스 나부의 함수를 클래스 메서드 멤버함수라고함 , 클래스 멤버 함수에 function은 사용하지 않도록 주의 / 정의할수 있는 멤버함수의 수는 제한이 없다.

//case1
class myClass {
  constructor() {}
  myMethod() {
    return 'hello world';
  }
  myMethod2() {
    return 2 + 2;
  }
}

const myClassTwo = new myClass();

console.log(myClassTwo.myMethod()); // hello world
console.log(myClassTwo.myMethod2()); //4

//case2

class myClass2 {
  constructor(name) {
    this.name = name;
  }
  myMethod() {
    return `${this.name} 입니다.`; // 멤버함수에서도 마찬가지로  this는 클래스 자신을 가리키며 변수에 접근하고 싶을 경우 this.필드명 사용
  }
  myMethod2() {
    return 2 + 2;
  }
}

const myClassThree = new myClass2('상히');
console.log(myClassThree.myMethod()); // 상히 입니다.
