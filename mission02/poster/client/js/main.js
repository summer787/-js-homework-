
/* 썸네일 이미지를 클릭하면 메인 이미지와 배경이 바뀔 수 있도록 코드 로직을 작성해주세요. */

const nav = getNode('nav');



// nav 클릭시 배경 색상 변경

function setBgColor(event) {
  const target = event.target.closest("li");
  const index = attr(target,'data-index')
  const body = getNode("body")
  const colorA= data[index-1].color[0];
  const colorB = data[index-1].color[1];
  body.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}

// 이미지 변경

function setImage(event) {
  const target = event.target.closest("li");
  const index = attr(target,'data-index')
  const dataname = data[index-1].name.toLowerCase()
  const visualImage = getNode('.visual img')
  attr(visualImage,'src',`./assets/${dataname}.jpeg`);
  attr(visualImage,'alt',data[index-1].alt);
}

// 텍스트 변경

function setNameText(event) {
  const target = event.target.closest("li");
  const nickName = getNode(".nickName")
  const index = attr(target,'data-index')
  nickName.textContent = data[index-1].name;
}

nav.addEventListener("click", handleClick);
nav.addEventListener("click", setBgColor);
nav.addEventListener("click", setImage);
nav.addEventListener("click", setNameText);


// 1. 클릭 이벤트 활성화

function handleClick(event) {
  const target = event.target.closest("li");
  const list = [...ul.children];
  list.forEach(li => removeClass(li,'is-active'));
  addClass(target,'is-active')

}


function handleSlider(e){
  e.preventDefault();
  
  const target = e.target.closest('li');
  const anchor = e.target.closest('a');
  
  if(!target || !anchor) return;

  
  const list = [...navigation.children];

  const index = attr(target,'data-index')

  list.forEach(li => removeClass(li,'is-active'));


  addClass(target,'is-active')






}




nav.addEventListener('click',handleSlider);
