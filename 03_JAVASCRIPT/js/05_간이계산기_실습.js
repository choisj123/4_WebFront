
// 전역 변수
const num1 = document.getElementById("input1"); // 요소 추적 O, 값이나 속성 추적 X
const num2 = document.getElementById("input2");


const resultBox = document.getElementById("resultBox");
let result;

function plus(){

            // 함수가 호출되었을 때 내부코드가 해석되면서 수행
    result = Number(num1.value) + Number(num2.value);

    resultBox.innerText = "계산 결과 : " + result;
}

function minus(){

    result = Number(num1.value) - Number(num2.value);

    resultBox.innerText = "계산 결과 : " + result;
}

function multi(){

    result = Number(num1.value) * Number(num2.value);

    resultBox.innerText = "계산 결과 : " + result;
}

function div(){

    result = Number(num1.value) / Number(num2.value);

    resultBox.innerText = "계산 결과 : " + result;
}

function rest(){

    result = Number(num1.value) % Number(num2.value);

    resultBox.innerText = "계산 결과 : " + result;
}
