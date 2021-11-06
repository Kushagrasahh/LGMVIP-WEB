function f(){
    document.getElementById("start1").style.backgroundImage = "url(/images/workspace1.jpg)";
    }
function f1(){
        document.getElementById("start1").style.backgroundImage = "url(/images/mountain1.jpg)";
    }
function f2(){
        document.getElementById("start1").style.backgroundImage = "url(/images/trees1.png)";
    }
function f3(){
        document.getElementById("start1").style.backgroundImage = "url(/images/office1.jpg)";
    }




function hover(){
    document.getElementById("employe1").src="/images/logohover(1).png";
}
function nohover(){
    document.getElementById("employe1").src="/images/logohover (2).png";
}
function hover1(){
    document.getElementById("employe2").src="/images/logohover(1).png";
}
function nohover1(){
    document.getElementById("employe2").src="/images/logohover (3).png";
}
function hover2(){
    document.getElementById("employe3").src="/images/logohover(1).png";
}
function nohover2(){
    document.getElementById("employe3").src="/images/logohover (4).png";
}
function hover3(){
    document.getElementById("employe4").src="/images/logohover(1).png";
}
function nohover3(){
    document.getElementById("employe4").src="/images/logohover (5).png";
}
function hover4(){
    document.getElementById("employe5").src="/images/logohover(1).png";
}
function nohover4(){
    document.getElementById("employe5").src="/images/logohover (6).png";
}
function hover5(){
    document.getElementById("employe6").src="/images/logohover(1).png";
}
function nohover5(){
    document.getElementById("employe6").src="/images/logohover (7).png";
}


const buttonleft=document.getElementById("slideleft")
const buttonright=document.getElementById("slideright")
buttonleft.addEventListener('click',function(){
    document.getElementById('slider').scrollLeft -=180
})
buttonright.addEventListener('click',function(){
    document.getElementById('slider').scrollLeft +=180
})
