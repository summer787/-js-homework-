
const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

const emailInput = document.getElementById("userEmail");
const passwordInput = document.getElementById("userPassword");

emailInput.addEventListener("input", emailCheck);
passwordInput.addEventListener("input", passwordCheck);

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(text).toLowerCase());
}

function emailCheck() {
  const emailvalue = emailInput.value;
  const userName = emailReg(emailvalue);
  if (userName) {
    emailInput.classList.remove("is--invalid");
  } else {
    emailInput.classList.add("is--invalid");
  }
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{10,16}$/;
  return re.test(String(text).toLowerCase());
}

function passwordCheck() {
  const passwordValue = passwordInput.value;
  const userSecret = pwReg(passwordValue);
  if (userSecret) {
    passwordInput.classList.remove("is--invalid");
  } else {
    passwordInput.classList.add("is--invalid");
  }
}

const loginButton = document.querySelector(".btn-login");

function loginMove(event) {
  event.preventDefault();
  if (emailInput.value === user.id && passwordInput.value=== user.pw) {
    window.location.href = "welcome.html";
  } else {
    alert("아이디나 비밀번호를 다시 확인하세요");
  }
}

loginButton.addEventListener("click", loginMove);
