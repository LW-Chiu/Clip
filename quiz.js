const start = document.getElementById("start");
const description = document.getElementById("description");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "請問這個影音的主題為何?",
        choiceA : "紅樓夢",
        choiceB : "三國演義",
        choiceC : "西遊記",
        choiceD : "金瓶梅",
        correct : "B"
    },{
        question : "請問這部影片的主講者是誰?",
        choiceA : "林國慶",
        choiceB : "張棋楨",
        choiceC : "孫中山",
        choiceD : "馬叔禮",
        correct : "D"
    }
];

// create some variables
let runningQuestion = Math.floor(Math.random()*2);

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    description.style.display = "none";
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
}

// render progress
function renderProgress(){
    let qIndex = runningQuestion
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
}

// checkAnwer
function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // change progress color to green
        answerIsCorrect();
        CorrectRender()
        setTimeout(function() { 
            window.close();
        }, 1000);
    }else{
        // change progress color to red
        answerIsWrong();
        WrongRender();
    }
    setTimeout(function() { 
        window.location.reload(1); 
    }, 1500);

}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

function WrongRender(){
    scoreDiv.style.display = "block";
    // choose the image based on the scorePerCent
    scoreDiv.innerHTML += "<p>"+"答案錯誤"+"<br>"+"請等待題目產生再挑戰一次"+ "</p>";
}

function CorrectRender(){
    scoreDiv.style.display = "block";
    // choose the image based on the scorePerCent
    scoreDiv.innerHTML += "<p>"+"恭喜正確"+"<br>"+"請等待頁面跳轉"+ "</p>";
}