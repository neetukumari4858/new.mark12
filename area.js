const sides=document.querySelectorAll(".side-input");
const hypotenuseBtn=document.querySelector("#hypotenuse-btn");
const outputE1=document.querySelector("#output");

function calculateSumofSquares(a,b){
    const sumofSquares =a*b/2;
    return sumofSquares;
}

function calulateHypotenuse(){
    const  sumofSquares=calculateSumofSquares(Number(sides[0].value),Number(sides[1].value));
    outputE1.innerText = "The Area of Triangle is"+" "+ sumofSquares;
}
hypotenuseBtn.addEventListener("click",calulateHypotenuse);


