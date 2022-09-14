function elementSetting(tagName, props) {
  props = typeof props === "object" ? props : console.error('need bojext type arguments');
  // props라는 인수가 객체면 props 리턴 아니면 에러 띄움
  tagName = typeof tagName === "string" ? tagName : console.error('need string type arguments');
  //  tagName라는 인수가 문자열이면 tagName 리턴 아니면 에러 띄움

  let setElem = document.createElement(tagName);
  // setElem 이라는 변수에 tagName 이라는 만들어서 담음

  for (let styleName in props) {
    setElem.style[styleName] = props[styleName];
    // props라는 객체의 key 값이 스타일요소가 되고 keyvalue 값이 스타일요소 값이 됨
  }
  return setElem;
  // 위사항 적용 하여 setElem 반환
}
// end

const root = document.getElementById('root'); // 상수에 root라는 태그를 가진 요소를 담음
root.appendChild(elementSetting("div", {
  width: "100px",
  Headers: "100px",
  backgroundColor: "salmon"
}))

//root는 elementSetting 이라는 함수를 통해 만들어진 div를 자식으로 놓고 해당 객체에 적힌 스타일을 적용한다.