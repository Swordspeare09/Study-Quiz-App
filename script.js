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
var questions = [
    {
        question: "What is the command to display a prompt?",
        choiceA: "prompt('Text Here');",
        choiceB: "var stringVar = prompt('Text Here');",
        choiceC: "alertBox('Hello World')",
        choiceD: "confirm('Message Text Here');",
        correct: "A"
    }, {
        question: "How do you assign the value from a prompt to a string?",
        choiceA: "prompt('Text Here');",
        choiceB: "var stringVar = prompt('Text Here');",
        choiceC: "confirm('Message Text Here');",
        choiceD: "alertBox('Hello World')",
        correct: "B"
    }, {
        question: "How do you assign the value from a prompt to a non-string variable?",
        choiceA: "if i=5 then",
        choiceB: "confirm('Message Text Here');",
        choiceC: "Using a parse.Example : var intVar = parseInt(prompt('Text Here'));",
        choiceD: "call myFunction()",
        correct: "C"
    }, {
        question: "How do you assign a default value to a prompt?",
        choiceA: "call myFunction()",
        choiceB: "alertBox('Hello World')",
        choiceC: "Correct",
        choiceD: "Using the second parameter.Example: prompt('Enter Age: ', '18');",
        correct: "D"
    }, {
        question: "How do you display a confirmation?",
        choiceA: "confirm('Message Text Here');",
        choiceB: "if i=5 then",
        choiceC: "alert('Hello World')",
        choiceD: "call myFunction()",
        correct: "A"
    }, {
        question: "What values can confirm() return?",
        choiceA: "var answerVar = confirm('Message Text Here')",
        choiceB: "Wronconfirm('Message Text Here');g",
        choiceC: "True or false",
        choiceD: "call myFunction()",
        correct: "C"
    }, {
        question: "How do you assign the return value of confirm() to a variable?",
        choiceA: "alert('Hello World')",
        choiceB: "var answerVar = confirm('Message Text Here')",
        choiceC: "function:myFunction()",
        choiceD: "confirm('Message Text Here');",
        correct: "B"
    }
];

//Array variable for holding High Score Objects
var highScores = JSON.parse(localStorage.highScoresArray);

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
    else
    {
        endQuiz();
    }

};

//Function for starting and updating timer
function displayTimer(){

    renderTime();
    interval = setInterval(function () {
        seconds--;
        if(seconds <= 0){
            clearInterval(interval);
            endQuiz();
        }
        renderTime();
    }, 1000);
};

//Simple Function for Inserting teh remaining seconds onto the page
function renderTime(){

    timer.textContent = seconds;
};

//Simple Function for hiding the timer after a each game
function hideTime(){

    timer.textContent ="";
}

function endQuiz(){

    var newHighscore = {
        name: "",
        score: 0
    }
    clearInterval(interval);
    var highScoreName = prompt("Congratulations! You scored " + score + " out of " +questions.length + "! Enter a name for the Leader Boards");
    newHighscore.name = highScoreName;
    newHighscore.score = score;
    highScores.push(newHighscore);
    localStorage.highScoresArray = JSON.stringify(highScores);
    runningQuestion = 0;
    seconds = 60;
    hideTime();
    alert("Click the LeaderBoard button to check out the latest high scores!");
    quiz.style.display = "none";
    start.style.display = "block";
}

//Todo List:
//to pull it out use JSON.parse()
//
//
//
//
//
