
const nav = getNode('nav');
const ul = getNode("ul");

// nav 클릭시 배경 색상 변경

function setBgColor(color) {
  const body = getNode("body")
  const [colorA,colorB] = color;
  body.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}

// 이미지 변경

function setImage(name,alt) {
  const visualImage = getNode('.visual img')
  const lowername = name.toLowerCase()
  attr(visualImage, "src", `./assets/${lowername}.jpeg`);
  attr(visualImage, "alt", `./assets/${alt}.jpeg`);;
}

// 텍스트 변경

function setNameText(name) {
  const nickName = getNode(".nickName")
  nickName.textContent = name;
}

// 1. 클릭 이벤트 활성화

function handleSlider(e) {
  const target = e.target.closest("li");
  const list = [...ul.children];
  if (!target) return;
  list.forEach((li) => removeClass(li, "is-active"));
  addClass(target, "is-active");

  const index = attr(target,"data-index");
  const realdata = index-1;
  const { color, name, alt } = data[realdata];
  
  setBgColor(color);
  setImage(name,alt);
  setNameText(name);
}
nav.addEventListener("click", handleSlider);