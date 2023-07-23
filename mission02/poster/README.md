## MISSION-02

### 썸네일 이미지를 클릭하면 메인 이미지와 배경이 바뀔 수 있도록 코드 로직을 작성

---

#### 이벤트 처리 방식을 사용한 클릭 이벤트

이벤트 위임

```
 const nav = getNode('nav'); 
 navigation을 getNode함수(querySelector활용)로 불러온 뒤
 const target = e.target.closest("li");
 const list = [...ul.children]
 list.forEach((li) => removeClass(li, "is-active"));
 addClass(target, "is-active"); 
```
  

#### 이미지와 색상의 데이터는 `data.js` 에서 불러오기
```
const index = attr(target,"data-index");
const realdata = index-1;
const { color, name, alt } = data[realdata];
```
- 구조 분해 할당을 활용함


#### 각 li 항목들을 클릭하면 배경 색상과 메인 비주얼 이미지를 변경

#### 이미지 변경   `setImage` 함수
 ```
  function setImage(name,alt) {
  const visualImage = getNode('.visual img')
  const lowername = name.toLowerCase()
  attr(visualImage, "src", `./assets/${lowername}.jpeg`);
  attr(visualImage, "alt", `./assets/${alt}.jpeg`);;
}
```
 - toLowerCase로 이름을 소문자로 만들어 줌


#### 배경색상 변경 `setBgColor` 함수
```
function setBgColor(color) {
  const body = getNode("body")
  const [colorA,colorB] = color;
  body.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}
  ```  
#### 비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경 `setNameText` 함수
```
   function setNameText(name) {
  const nickName = getNode(".nickName")
  nickName.textContent = name;
}
```
---

#### 문제 해결 과정 및 개선할 점

각각의 함수마다 addEventlistner를 중복하여 코드 작성

-> function handleSlider 함수 이해가 부족 - 수업시간 예제를 참고하여 handleSlider함수를 생성하고 click 함수를 한번에 실행

color, name, alt 값을 따로따로 불러옴 

-> 구조 분해 할당 활용


- 구조 분해 할당 이해 부족 및 함수의 매개변수에 값을 제대로 이해하지 못해 코드 수정 시 어려움

-> 구조 분해 할당 복습 및 함수를 호출, 매개변수 값을 설정하는 것 연습할 것 
