// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const chocieD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question: "What is the command to display a prompt?",
        choiceA: "prompt('Text Here');",
        choiceB: "Wrong",
        choiceC: "Wrong",
        chocieD: "Wrong",
        correct: "A"
    }, {
        question: "How do you assign the value from a prompt to a string?",
        choiceA: "Wrong",
        choiceB: "var stringVar = prompt('Text Here');",
        choiceC: "Wrong",
        chocieD: "Wrong",
        correct: "B"
    }, {
        question: "How do you assign the value from a prompt to a non-string variable?",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Using a parse.Example : var intVar = parseInt(prompt('Text Here'));",
        chocieD: "Wrong",
        correct: "C"
    }, {
        question: "How do you assign a default value to a prompt?",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        chocieD: "Using the second parameter.Example: prompt('Enter Age: ', '18');",
        correct: "D"
    }, {
        question: "How do you display a confirmation?",
        choiceA: "confirm('Message Text Here');",
        choiceB: "Wrong",
        choiceC: "Correct",
        chocieD: "Wrong",
        correct: "A"
    }, {
        question: "What values can confirm() return?",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "True or false",
        chocieD: "Wrong",
        correct: "C"
    }, {
        question: "How do you assign the return value of confirm() to a variable?",
        choiceA: "Wrong",
        choiceB: "var answerVar = confirm('Message Text Here')",
        choiceC: "Correct",
        chocieD: "Wrong",
        correct: "B"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    chocieD.innerHTML = q.chocieD;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    // renderProgress();
    // renderCounter();
    // TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

// counter render

function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0;
        // change progress color to red
        answerIsWrong();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // answer is correct
        score++;
        // change progress color to green
        // answerIsCorrect();
    } else {
        // answer is wrong
        // change progress color to red
        // answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender() {
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score / questions.length);

    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
        (scorePerCent >= 60) ? "img/4.png" :
            (scorePerCent >= 40) ? "img/3.png" :
                (scorePerCent >= 20) ? "img/2.png" :
                    "img/1.png";

    scoreDiv.innerHTML = "<img src=" + img + ">";
    scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}


