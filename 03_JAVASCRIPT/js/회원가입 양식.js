//아이디
const userId = document.getElementById("userId");
userId.addEventListener("keypress", function () {
  // - 아이디 (영문 소문자로 시작, 영어 대/소문자, 숫자, -, _로만 이루어진 6~14글자 사이 문자열
  const regEx = /^[a-z]+[a-zA-Z0-9-_]{6,14}$/g;
  

  if (regEx.test(this.value)) {
    userId.style.backgroundColor = "springgreen";
  } else {
    userId.style.backgroundColor = "red";
    userId.style.color = "white";

  }
});

// 비밀번호
const userPw = document.getElementById("userPw");
const userPwCheck = document.getElementById("userPwCheck");

const pwResult = document.getElementById("pwResult");
pwResult.innerHTML = "";

userPw.addEventListener("keyup", function () {
  if(userPw = userPwCheck){
    pwResult.innerHTML = "비밀번호 일치"
    pwResult.style.color = "green";
  }else{
    pwResult.innerHTML = "비밀번호 불일치"
    pwResult.style.color = "red";
  }
  

});

// - 이름 (한글 2~5글자)
const userName = document.getElementById("userName")
userName.addEventListener("keyup", function () {

  const nameResult = document.getElementById("nameResult");

  const regEx = /[가-힣]{2,5}/;
  if(regEx.test(this.value)){
    nameResult.innerHTML = "정상입력"
    nameResult.style.color = "green";
  }else{
    nameResult.innerHTML = "한글만 입력하세요"
    nameResult.style.color = "red";
  }

});

// 회원가입 버튼 클릭시
const register = document.getElementById("register");
register.addEventListener("click", function(){

  // 성별
  const gender = document.getElementById("gender")
  gender.addEventListener("keyup", function(){
  
    if(gender.value = null){
      alert("성별을 선택해주세요")
    }
  })

  // 전화 번호
  const phone = document.getElementById("phone")
  phone.addEventListener("keyup", function () {
    const regEx = /^0(?:\d{1}|\d{2})-(?:\d{3}|\d{4})-\d{4}$/;
  
    if (!regEx.test(this.value)) {
      alert("전화번호의 형식이 올바르지 않습니다")
    }
  });


  // 이메일
  const email = document.getElementById("email")
  email.addEventListener("keyup", function () {
    const regEx = /@ .com$/;
  });


})




