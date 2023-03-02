

const changeBtn = document.getElementById("changeBtn");
const changeInput = document.getElementById("changeInput");
const result = document.getElementById("result");

changeBtn.addEventListener("click", function(){
    result.innerHTML = changeInput.value;
    
    window.setTimeout(function(){
        
        const input1 = document.getElementById("input1")
        input1.addEventListener("keyup", function(){
            const div1 = document.getElementById("div1");
            
            div1.style.backgroundColor = this.value;
            input1.style.color = this.value;
            
        })
        
    }, changeInput.value + "000")

    window.setTimeout(function(){
        const input2 = document.getElementById("input2")
        input2.addEventListener("keyup", function(){
            const div2 = document.getElementById("div2");
        
            div2.style.backgroundColor = this.value;
            input2.style.color = this.value;
            
        })
    },changeInput.value + "000")
        
    window.setTimeout(function(){
        const input3 = document.getElementById("input3")
        input3.addEventListener("keyup", function(){
            const div3 = document.getElementById("div3");
        
            div3.style.backgroundColor = this.value;
            input3.style.color = this.value;
            
        })
    },changeInput.value + "000")
        
        window.setTimeout(function(){
        const input4 = document.getElementById("input4")
        input4.addEventListener("keyup", function(){
            const div4 = document.getElementById("div4");
        
            div4.style.backgroundColor = this.value;
            input4.style.color = this.value;
            
        })
    },changeInput.value + "000")
        
        window.setTimeout(function(){
        const input5 = document.getElementById("input5")
        input5.addEventListener("keyup", function(){
            const div5= document.getElementById("div5");
        
            div5.style.backgroundColor = this.value;
            input5.style.color = this.value;
            
        })
    },changeInput.value + "000")

        
        

})
