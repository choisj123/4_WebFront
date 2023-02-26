
const box = document.getElementById("box");

let count = 0;

box.addEventListener("mouseover", function() {
    
    count++;

    if(count == 1) {
        this.classList.remove("box");
        this.classList.add("love");
        this.innerText = "사랑해"
    } else if(count < 11) {
        const text = "사랑해";
        this.innerText += text;
    } else {
        this.classList.remove("love");
        this.classList.add("stop");
        this.innerText = "그만해!!!";
    }
})
