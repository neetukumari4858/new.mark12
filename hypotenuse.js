const sides=document.querySelectorAll(".side-input");
const hypotenuseBtn=document.querySelector("#hypotenuse-btn");
const outputE1=document.querySelector("#output");

function calculateSumofSquares(a,b){
    const sumofSquares =a*a + b*b;
    return sumofSquares;
}

function calulateHypotenuse(){
    const  sumofSquares=calculateSumofSquares(Number(sides[0].value),Number(sides[1].value));

    const lengthOfHypotenuse=Math.sqrt(sumofSquares);
    outputE1.innerText = "The length of hypotenuse is "+ lengthOfHypotenuse;
}
hypotenuseBtn.addEventListener("click",calulateHypotenuse);