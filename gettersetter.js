console.log("hi")

class User {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
  get age() {
    this._age = this._age + 1;
    return this._age;
  }
  set age(value) {
    if (value < 0) {
      throw Error('age can not be negative');
    }
    this._age = value;
  }
}

const user1 = new User('상희', '양', 12);
console.log(user1.age);

user1.age = 14; ////user Class 호출 => 자동으로 set함수(set age)가 자동 실행 =>무한루프
user1._age = 15; //user Class 호출 => 자동으로 set함수(set age)가 자동 실행 => 루프 빠져나옴 / this.age에 값이 할당 되지않고 set 함수내부 this._age=value로 직접 값이 할당되기때문