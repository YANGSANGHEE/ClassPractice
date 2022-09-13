// 클래스에서 변수 사용(클래스에서 변수를 사용하고 싶을때, API 통신결과 클래스를 생성하고 싶을때)
// this.변수명 = 값 =>멤버변수정의

// 클래스에 속하는 변수를 클래스 필드, 클래 스변수, 멤버 변수라고한다.

class myClass {
  constructor() {
    // 클래스 멤버 변수를 정의하기 위햐서는 constructor() 내부에 'this.변수명'을 사용 ***(여기서 this 는 class 자신을 가르킴!!!!!!)
    this.myField1 = 100;
    //멤버 변수는 초기값 대입이 가능하며, 대입하지 않음 undefind로 정의됨
    this.myField2 = '사자';
  }
}

// case 1
//두개의 param을 가짐
class myClassTwo {
  constructor(myField1, myField2) {
    this.myField1 = myField1;
    this.myField2 = myField2;
  }
}

const myNewClass = new myClassTwo('이것이', '필드다');
console.log(myNewClass.myField1); // 이것이
console.log(myNewClass.myField2); // 필드다

// case2
class myClassThree {
  constructor(myField1, myField2 = '필드임') {
    // myField2에 초기값 지정

    this.myField1 = myField1;
    this.myField2 = myField2;
  }
}

const mySecondClass = new myClassThree('이것이');
console.log(mySecondClass.myField1); // 이것이
console.log(mySecondClass.myField2); // 필드임

// case3
// ★★API통신 결과의 JSON데이터를 보관하는 클래스 생성

class ApiResultData {
  constructor() {
    //멤버변수 설정
    this.result;
    this.errorMessage;
    this.userName;
    this.age;
  }
}

// response 데이터 변환(API ResultData로 변환)을 위한 함수
function parseData(response) {
  const apiResultData = new ApiResultData();

  apiResultData.result = response.result;
  apiResultData.errorMessage = response.error_message;
  apiResultData.userName = response.user_name;
  apiResultData.age = response.age;

  console.log(`${apiResultData.userName} : ${apiResultData.age}`);
}

//Api response Data
const apiResultData = {
  result: true,
  user_name: '사자',
  age: 24,
};

parseData(apiResultData); // 사자 : 24
