# js-homework-
---
## mission-1

##일치하는 아이디와 비밀번호를 입력했을 경우 welcome 페이지로 이동하는 코드 로직을 작성해주세요.

- email 정규표현식을 사용한 validation

: email input에 들어가는 값을 정규표현식 함수에 넣어 

  그 값이 참일경우  is--invalid 제거 

  거짓일 경우  is--invalid 추가

- pw 정규표현식을 사용한 validation

  email input에 들어가는 값을 정규표현식 함수에 넣어 그 값이 참일경우 is--invalid 제거 

  거짓일 경우 is--invalid 추가
  
- 로그인 버튼을 클릭시 조건처리

  로그인 버튼을 html에서 불러와 

  시용자가 입력한 아이디와 비밀번호 값이 일치한 경우

  다음페이지로 이동하도록 addEventListener ("click", 함수) 를 활용한다

- event.preventDefault()

  기본 동작을 중지시킨다 

  이벤트의 기본 동작을 수행하지 않게 만들어 이후 페이지를 이동 시키는 동작을 구현할 수 있다
