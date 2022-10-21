
const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", slide);
//myButton.addEventListener("click", rotate);
//myButton.addEventListener("click", scale);

//slide
function slide(){
    let timerId = null;
    let x = 0;
    let y = 0;

    timerId = setInterval(frame, 5); //declear timerId so u can clear timerId

    function frame(){
        if(x >= 200 || y >= 200){
            clearInterval(timerId);
        }
        else{
            x+=1;
            y+=1;
            myAnimation.style.top = y + 'px';
            myAnimation.style.left = x + 'px';
        }
    }
}

//spin
function rotate(){
    let timerId = null;
    let degrees = 0;
 
    timerId = setInterval(frame, 5);

    function frame(){
        if(degrees >= 360){
            clearInterval(timerId);
        }
        else{
            degrees+=1;
            myAnimation.style.transform = "rotateZ("+degrees+"deg)";  //writes to css
        }
    }
}

//enlarge or decrease
function scale(){
    let timerId = null;
    let scaleX = 1;    // 1 => 100%
    let scaleY = 1;
 
    timerId = setInterval(frame, 5);

    function frame(){
        if(scaleX <= 0.1 || scaleY <= 0.1){  //scaleX >= 2 || scaleY >= 2  enlarges
            clearInterval(timerId);
        }
        else{
            scaleX-=0.01;
            scaleY-=0.01;
            myAnimation.style.transform = "scale("+scaleX+","+scaleY+")"; //writes to css
        }
    }
}