// * 아이디 : 값이 변했을 때
const inputId = document.getElementById("inputId");

inputId.addEventListener("change", function(){
    // 영어 소문자로 시작하고,
    // 영어 대/소문자, 숫자, - , _ 로만 이루어진 6-14 글자 사이 문자열인지 
    const regEx = /^[a-z][\w_-]{5,13}$/;
    // const regEx = /^[a-z][a-zA-Z0-9-_]{5,13}$/;
    // /^[a-z]+[a-zA-Z0-9-_]{6,14}$/g;

    // - 형식이 일치할 경우
    // 입력창의 배경색을 springgreen으로 변경
})