// Selected Elements From HTML
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const timer = document.getElementById("timer");

// Array of Question Objects
let questions = [
    {
        question: "What is the command to display a prompt?",
        choiceA: "prompt('Text Here');",
        choiceB: "Wrong",
        choiceC: "Wrong",
        choiceD: "Wrong",
        correct: "A"
    }, {
        question: "How do you assign the value from a prompt to a string?",
        choiceA: "Wrong",
        choiceB: "var stringVar = prompt('Text Here');",
        choiceC: "Wrong",
        choiceD: "Wrong",
        correct: "B"
    }, {
        question: "How do you assign the value from a prompt to a non-string variable?",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Using a parse.Example : var intVar = parseInt(prompt('Text Here'));",
        choiceD: "Wrong",
        correct: "C"
    }, {
        question: "How do you assign a default value to a prompt?",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        choiceD: "Using the second parameter.Example: prompt('Enter Age: ', '18');",
        correct: "D"
    }, {
        question: "How do you display a confirmation?",
        choiceA: "confirm('Message Text Here');",
        choiceB: "Wrong",
        choiceC: "Correct",
        choiceD: "Wrong",
        correct: "A"
    }, {
        question: "What values can confirm() return?",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "True or false",
        choiceD: "Wrong",
        correct: "C"
    }, {
        question: "How do you assign the return value of confirm() to a variable?",
        choiceA: "Wrong",
        choiceB: "var answerVar = confirm('Message Text Here')",
        choiceC: "Correct",
        choiceD: "Wrong",
        correct: "B"
    }
];

// Created global variables 
const lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 0;
var seconds = 60;
var score = 0;
var interval;

// render a question
function renderQuestion() {
    var q = questions[runningQuestion];

    question.textContent = q.question ;
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;
    choiceD.textContent = q.choiceD;
};

start.addEventListener("click", startQuiz);

// Function for starting the quiz and timer
function startQuiz() {
    start.style.display = "none";
    displayTimer();
    renderQuestion();
    quiz.style.display = "block";
};

//
function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) 
    {
        score++;
        renderQuestion();
    } else {
        seconds = seconds -5;
        renderQuestion();
    }

    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    }

};

//Function for starting and updating timer
function displayTimer(){

    renderTime();
    interval = setInterval(function () {
        seconds--;
        if(seconds <= 0){
            endQuiz();
        }
        renderTime();
    }, 1000);
};

//Simple Function for Inserting teh remaining seconds onto the page
function renderTime(){

    timer.textContent = seconds;
};

function endQuiz(){
    var highScoreName = prompt("Congratulations! You scored " + score + " out of " +questions.length + "! Enter a name for the Leader Boards");
    localStorage.setItem()

}
