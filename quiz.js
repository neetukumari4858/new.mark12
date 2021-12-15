const quizForm=document.querySelector(".quiz-form");
const submitAnswerBtn=document.querySelector("#submit-answer-btn")
const outputE1=document.querySelector("#output");
const correctAnswers=["90°","acute","one right angle","12 16 20","Isosceles triangle" ,"100°","10°","2a","65°" ,"no"]

function calculateScore(){
    let score=0;
    let index=0;
    const formResults= new FormData(quizForm);
    for(let value of  formResults.values()){
        if(value===correctAnswers[index]){
            score=score+1;
        }
        index=index+1;
    }
    outputE1.innerText="your score is" + score;
}
submitAnswerBtn.addEventListener("click",calculateScore)