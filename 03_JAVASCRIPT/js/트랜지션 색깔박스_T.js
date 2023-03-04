// 색 출력 영역

// 요소를 얻어와서 변수에 저장

// 클래스명, 태그명, name 속성값, querySelectorAll() 같은 경우
// 요소를 얻어올 때 배열 형식으로 반환!!
const container = document.getElementsByClassName("container")[0];

const area = document.getElementsByClassName("area");
const box = document.getElementsByClassName("box");
const boxColor = document.getElementsByClassName("box-color");

// JS로 CSS 추가하기
// container 클래스 요소에 display : flex 추가
container.style.display = "flex";

// area 클래스 요소에 높이 170px, 너비 150px, 테두리 1px 검정색 실선
// display : flex, main-axis 방향 : 열(세로)

// 일반 for문 || for of
for (let item of area){
    // item == area 배열에 담긴 요소를 순차적으로 하나씩 꺼내 저장하는 변수
    item.style.height = "170px";
    item.style.width = "150px";
    item.style.border = "1px solid black";
    item.style.display = "flex";
    item.style.flexDirection = "column";
}