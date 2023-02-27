document.getElementById("id").addEventListener("keypress", function () {
  // - 아이디 (영문 소문자 + 숫자 / 5글자 이상) - 아이디 사용 가능 / 불가능
  const regEx = /[a-z][[0-9]{5,}/;
  const idOutput = document.getElementById("idOutput").value;

  if (regEx.test(this.value)) {
    idOutput.textContent = "아이디 사용 가능.";
    idOutput.classList.add("confirm");
  } else {
    idOutput.innerText = "아이디 사용 불가능";
  }
});

document.getElementById("password").addEventListener("keyup", function () {
  // - 비밀번호 (영문대/소문자 + 특수문자 + 숫자 / 8글자 이상) - 비밀번호 사용 가능/불가능
  const regEx = /[a-z][A-Z]{8,}/;

  if (regEx.test(this.value)) {
  }
});
// - 비밀번호 확인 ( 비밀번호와 일치했을 때 일치한다 표시 )

document.getElementById("name").addEventListener("keyup", function () {
  // - 이름 (한글 2글자 이상)

  const regEx = /[가-힣]{2,}/;
});

document.getElementById("phone").addEventListener("keyup", function () {
  // - 휴대폰번호 (숫자만 단, 010으로 시작)
  const regEx = /^010[0-9]/;
});

document.getElementById("RRN-1").addEventListener("keyup", function () {
  // [  6글자  ] - [       ]
  const regEx = /{6}/;
});
document.getElementById("RRN-2").addEventListener("keyup", function () {
  // - 주민등록번호 (단, 7번째 숫자는 1,2,3,4 만 가능)
  const reqEx = /[1,2,3,4]/;
});
document.getElementById("email").addEventListener("keyup", function () {
  // - 이메일 ( @무조건 포함. 맨뒤는 .com 으로 끝날 것)
  const regEx = /@ .com$/;
});
// - submit 버튼

// 둘다 가능일때

// alret 창 (" 사용 가능한 계정입니다 ! ") / (" 유효성 검사가 완료되지 않았습니다 ")
