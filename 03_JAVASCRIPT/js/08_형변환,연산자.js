// 형반환 확인하기
const btn1 = document.getElementsByClassName("btn1")[0];
// const btn1 = document.querySelector(".btn");

btn1.addEventListener("click", function () {
  console.log("parseInt('123') : " + parseInt("123"));
  console.log(typeof "123");
  console.log(typeof parseInt("123"));
  console.log("parseInt('2.94') : " + parseInt("2.94"));
  console.log("============================================");

  console.log("parseFloat('123') : " + parseFloat("123"));
  console.log("parseFloat('3.14') : " + parseFloat("3.14"));
  console.log("============================================");

  console.log("Number('123') : " + Number("123"));
  console.log("Number('3.14') : " + Number("3.14"));
});

// isNaN(값)
const input2 = document.getElementById("input2");
const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function () {
  if (isNaN(input2.value)) {
    alert("숫자가 아닙니다.");
  } else {
    alert("숫자 입니다.");
  }
});

//Math.random()
const bgbtn = document.getElementById("btn4");

bgbtn.addEventListener("click", function () {
  // rgb 색상 랜덤 대입 (0 ~ 255)
  const r = Math.floor(Math.random() * 256); // 0 <= ran < 256
  const g = Math.floor(Math.random() * 256); // 0 <= ran < 256
  const b = Math.floor(Math.random() * 256); // 0 <= ran < 256

  console.log(r, g, b);
  document.querySelector("body").style.backgroundColor =
    "rgb(" + r + "," + g + "," + b + ")";
});
