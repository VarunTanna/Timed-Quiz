Script.js 

// grab all the elements 
var viewHighScores = document.getElementById("viewhighscore");
var timer = document.getElementById("timer");
var quizEl = document.querySelector("#quiz");
var startEl = document.querySelectorAll("#start");
var startButton = document.getElementById("startBtn");
var quizs = document.getElementById("quiz");
var questionsEl = document.getElementById("quetion");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var results = document.getElementById("result");
var gameOver = document.getElementById("gameover");
var final = document.getElementById("finalScore");
var intial = document.getElementById("initials");
var scores = document.getElementById("score");
var containers = document.getElementById("container");
var highScorePage = document.getElementById("highscorePage");
var highScoreHeader = document.getElementById("highscoreHeader");
var highScoreIntials = document.getElementById("highscoreInitals");
var highScoreScore = document.getElementById("highscoreScore");
var endgameBtns = document.getElementById("endGameBtns");
var playagain = document.getElementById("playAgain");
var endEl = document.querySelector("#end");
var answerEl = document.getElementById("answer");
var timerRemaining = 90;
var state = "quiz";
position = 0;

//quiz questions and answers objecct
const quizQuestions = [
    {
        question: "In which country was Elon Musk born?",
         
            1: "Romania",
            2: "Canada",
            3: "South Africa",
            4: "America",
    
        correctAnswer: "South Africa",
    },

    {
        question: "ELon taught himself computer programming at what age?",
        
            1: "8",
            2: "10",
            3: "12",
            4: "14",
        
        correctAnswer: "10",
    },

    {
        question: "At age 12, Elon sold his first computer program for $500. It was a video game called what?",
        
            1: "Blastar",
            2: "Space invaders",
            3: "Pacman",
            4: "Asteroids",
    
        correctAnswer: "Blastar",
    },

    {
        question: "In 1999, Elon founded X.com, which merged with Confinity 2 years later to become which online business?",
        
            1: "Google",
            2: "PayPal",
            3: "Twitter",
            4: "Facebook",
    
        correctAnswer: "PayPal",
    },

    {
        question: "How much is Elon Musk worth?",
        
            1: "176.7 Billon",
            2: "204.8 Billon",
            3: "218.1 Billon",
            4: "236.5 Billon",
        
        correctAnswer: "218.1 Billon",
    },
];
// created buttons for our page thur j/s  recevied help from a friend for set up
function displayQuestions() {
    questionsEl = "";
    answerEl = "";

    var buttonA = document.createElement("button");
    var buttonB = document.createElement("button");
    var buttonC = document.createElement("button");
    var buttonD = document.createElement("button");
    var questionView = document.createElement("p");

    questionView.textContent = myQuestions[position].question;
    buttonA.textContent = quizQuestions[position].choiceA;
    buttonB.textContent = quizQuestions[position].choiceB;
    buttonC.textContent = quizQuestions[position].choiceC;
    buttonD.textContent = quizQuestions[position].choiceD;

    questionsEl.appendChild(questionView);
    answerEl.appendChild(buttonA);
    answerEl.appendChild(buttonB);
    answerEl.appendChild(buttonC);
    answerEl.appendChild(buttonD);

}          

answerEl.addEventListener("click", function (event) {
    if (event.target.type === "score") {
        if (event.target.textContent === quizQuestions[position].correctAnswer) 
            alert("Good Job!")
    } else {
        alert("Incorrect! You lost time!")
        timeRemaining = timeRemaining - 15;

    }
    position++;
    if (position < quizQuestions.length) {
        displayQuestions();
    } else {
        state = "end";
        displayState();
    }

});

//hide that and then show questions inside a function
function displayMessage() {
    timer.textContent - "Time Left" + timerRemaining;

    function setTime() {
    displayMessage();
    var timerInterval = setInterval(function() {
        timerRemaining--;
        displayMessage();

        if (timeRemaining === 0){
            alert("Ran out of time!")
            state = "gameOver";
            clearInterval(timerInterval);
            displayState();
        }
    }, 1000);
}

function displayScore() {
    if (state = "end") {
        playScore.textContent("Score:" + timeRemaining);
    }
}

// display state which allows us to break the webapge up in different stats or pages. got help from instructor

function displayState() {
    if (state === "start") {
        startEl.style.display = "block";
        quizEl.style.display = "none";
        gameOver.style.display = "none";
    }

    if (state === "quizs") {
        startEl.style.display = "none";
        quizEl.style.display = "block";
        gameOver.style.display = "none";
        displayQuestions();
        setTime();
    }

    if (state === "end") {
        startEl.style.display = "none";
        quizEl.style.display = "none";
        gameOver.style.display = "block";
        displayScore();
    };
}

function init() {
    displayState();
}
// moved evetn listenr to the bottom as instructed by teacher
starts.addEventListener("click", function() {
    state = "quiz";
    displayState();
});

gameOver.addEventListener("click", function () {
    state = "end";
    displayState();
  });


 init();


 //event listener on all answer buttons. only add one.



// seprate function to change the question to the next question 


//// compare the buttton they pick to the right answer

// take the time they have left as their score

// save that as their high score in local storage

// key and the score saved to local storage

// no page manu other than hidding and unhiding things 

//set up timer last