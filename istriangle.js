const inputs=document.querySelectorAll('.angle-input');
const isTriangleBtn=document.querySelector("#is-triangle-btn");
const outputE1=document.querySelector("#output");

function calculateSumOfAngles(agle1,angle2,angle3){
    const sumOfAngles=agle1+angle2+angle3
    return sumOfAngles;
}
function isTriangle(){
    const sumOfAngles=calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(sumOfAngles===180){
        outputE1.innerText="Yay,The angles from a triangle";
    }
    else{
        outputE1.innerText="oh oh!,The angles don't from a triangle";
    }
}
isTriangleBtn.addEventListener("click",isTriangle)