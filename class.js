class ItsMe { // 주로 카멜케이스로 클래스 선언
  constructor(id, name, city) { //constructor를 삽입시 초기화시 해당 메소드를 실행되며 , 한번만 삽입 가능
    this.id = id; // 클래스에 속하는 변수를 클래스 필드, 클래스변수, 멤버변수라함 (this 는 클래스 자신을 얘기함 (ItsMe))
    this.name = name;
    this.city = city;
  }
}

let box = []
let arr = ['a', 'b', 'c', 'd', 'e', 'f']

arr.forEach((value, index) => {
  box.push(new ItsMe(index + 1, `${value}님`, '도시명'))
})

console.log(arr);
console.log(box);

class ahyun extends ItsMe {
  constructor(id, name, city, glass) {
    super(id, name, city)// this를 쓰기 위해서는 super를 먼저 호출을해야함(호출시 부모 멤버변수까지)
    this.glass = glass
  }
}

let ahyuns = new ahyun('1', '이아현', '대전', '씀');

console.log(ahyuns);

// Json 파일만들기
const fs = require("fs"); // 파일 시스템을 가져오는 모듈을 가져올꺼임

let saveFile = JSON.stringify(box, null, 2); // box를 json 화

fs.writeFile('./test.json', saveFile, "utf-8", (err) => {
  if (err) throw err
});
