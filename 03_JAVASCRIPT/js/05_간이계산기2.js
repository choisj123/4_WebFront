// 전역 변수
const num1 = document.getElementById("input1"); // 요소 추적 O, 값이나 속성 추적 X
const num2 = document.getElementById("input2");


const result = document.getElementById("result");


function calc(op){
    //op에는 +,-,*,/,% 중 하나가 전달됨

    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    switch(op){
        case '+' : result.innerText = n1 + n2; break;
        case '-' : result.innerText = n1 - n2; break;
        case '*' : result.innerText = n1 * n2; break;
        case '/' : result.innerText = n1 / n2; break;
        case '%' : result.innerText = n1 % n2; break;
    }

}