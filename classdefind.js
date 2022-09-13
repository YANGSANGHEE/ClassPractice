// 클래스 정의하기(특정기능을 클래스로 만들고 싶을때, 자바스크립트에서 ★객체지향 프로그래밍을 구현하고 싶을때)
// class 클래스명 {} => 클래스를 선언
// 키워드 class를 사용해 클래스를 선언하며, 클래스명은 카멜케이스를 이용하는것이 일반적(특히 리액트)

class MyClass {
  constructor() {
    console.log('class 초기화됨'); // 클래스에 constructor()를 삽입하면 초기화시 해당 메서드가 실행되며 costructor()문의 삽입은 한번만 가능
  }
} // 클래시 초기화시 초깃값을 constructor()인수로 전달하여 외부값을 사용할 수 있다.

console.log(new MyClass()); // class 초기화됨 myClass{}

// case1

class Myintance {
  constructor(value1, value2) {
    console.log(`${value1}`);
    console.log(`${value2}`);
  }
}

console.log(new Myintance('상희', '존예')); // 상희존예 MYintance{}

// 클래스는 고유의 변수와 함수를 가질 수 있으며 , 이요소를 멤버라고 한다.

class MyClass2 {
  constructor(name) {
    this.MyField = name; //멤버변수
  }
  Method() {
    console.log(this.MyField); // 멤버함수
  }
}

console.log(new MyClass2('냐옹이')); // MyClass2 {MyField : '냐옹이'}
