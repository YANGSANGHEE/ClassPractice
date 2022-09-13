//클래스 사용하기(인스턴스화) 클래스 인스턴스화를 하고 싶을때 , 생성한 클래스를 사용하고 싶을때
// new 클래스명() => class선언으로 정의한 클래스를 실제 데이터로 사용하기 위해서는 new연산자를 사용하며 , 인스턴스화가 필요
// 인스턴스화한 데이터는 클래스 내 각 요소와 메서드에 접근이 가능!

// case1
class MyClass {
  constructor() {
    this.classField = 12;
  }
  classMethod() {
    console.log('메서드실행');
  }
}

const MynewInstance = new MyClass();
console.log(MynewInstance.classField); //12
MynewInstance.classMethod(``); // 메서드 실행
