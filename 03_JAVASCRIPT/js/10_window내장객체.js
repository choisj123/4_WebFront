// window.setTimeout(함수, 지연시간(ms))
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function(){
    // 0초 (클릭하자마자 지연시간 x)
    this.style.backgroundColor = 'pink';

    // 3초 후 orange로 변경
    window.setTimeout(function() {
        //window.setTimeout()에서 this == window 객체
        btn1.style.backgroundColor = 'orange';

    }, 3000);

    console.log("중간에 출력");

    // 6초 후 yellow로 변경
    window.setTimeout(function(){
        btn1.style.backgroundColor = 'yellow';
    },6000);

    console.log("노랑으로 출력");
    
    // 9초 후 green으로 변경
    window.setTimeout(function(){
        btn1.style.backgroundColor = 'green';
    },9000);

    console.log("초록으로 출력");


})

// 현재 시간을 반환하는 함수
function currentTime(){
    const now = new Date(); // 현재 시간 정보를 저장하고있는 객체 생성

    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    // 얻어온 시간값이 10미만일 경우 앞에 0 추가
    if(hour < 10) hour = "0" + hour;
    if(min < 10) min = "0" + min;
    if(sec < 10) sec = "0" + sec;

    return hour + " : " + min + " : " + sec;
    
}

// 페이지가 로딩되자마자 #clock에 현재 시간 출력
const clock = document.getElementById("clock");
clock.innerText = currentTime();

// 페이지가 로딩되자마자 #date 현재 날짜 출력
const date = document.getElementById("date");
date.innerText = currentDate();

// #clock에 1초마다 현재 시간을 출력하도록 하는 코드를 작성
const interval = window.setInterval(function(){
    clock.innerText = currentTime();
}, 1000);

document.getElementById("stop").addEventListener("click", function(){
    window.clearInterval(interval);
})

// 현재 날짜 가져오기
function currentDate(){
    const now = new Date();

    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    
    if(month < 10) month = "0" + month;
    if(date < 10) date = "0" + date;
    
    let dayArr = ['일','월','화','수','목','금','토'];

    let day = dayArr[now.getDay()];

    return year + "년 " + month + "월 " + date + "일 " + day + "요일";

}

// 팝업창 열기

const openPopup1 = document.getElementById("openPopup1");
const openPopup2 = document.getElementById("openPopup2");
const openPopup3 = document.getElementById("openPopup3");

openPopup1.addEventListener("click", function(){
    // 새 탭에서 열기
    window.open("09_배열.html")
})

openPopup2.addEventListener("click", function(){
    // 최소한의 팝업창 형태로 열기
    window.open("09_배열.html", "_blank", "popup")
})

openPopup3.addEventListener("click", function(){
    // 옵션이 지정된 팝업창
    // 옵션 작성 방법 : "K=V, K=V, K=V", 크기 단위 작성 X (px 고정)
    const options = "width=400, height=500, top=50, left=400"; 
    
    window.open("09_배열.html", "popupWindow", options);
})

// 팝업창(자식) 열기

document.getElementById("sendChild").addEventListener("click", function(){
    const options = "width=300, height=300, top=50, left=700"; 
    window.open("10_팝업.html", "popupWindow", options);

})
