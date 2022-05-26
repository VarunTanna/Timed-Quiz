// grab all the elements 
var viewHighScores = document.getElementById("viewhighscore");
var time = document.getElementById("timer");
var starts = document.getElementById("start");
var startButton = document.getElementById("startBtn");
var quizs = document.getElementById("quiz");
var questions = document.getElementById("quetion");
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
var clearHighScore = document.getElementById("clearhighScore");
var answer = document.getElementById("answers");

//quiz questions and answers objecct
const quizQuestions = [
    {
        question: "In which country was Elon Musk born?",
        answers: {
            1: "Romania",
            2: "Canada",
            3: "South Africa",
            4: "America",
        },
        correctAnswer: "South Africa",
    },

    {
        question: "ELon taught himself computer programming at what age?",
        answers: {
            1: "8",
            2: "10",
            3: "12",
            4: "14",
        },
        correctAnswer: "10",
    },

    {
        question: "At age 12, Elon sold his first computer program for $500. It was a video game called what?",
        answers: {
            1: "Blastar",
            2: "Space invaders",
            3: "Pacman",
            4: "Asteroids",
        },
        correctAnswer: "Blastar",
    },

    {
        question: "In 1999, Elon founded X.com, which merged with Confinity 2 years later to become which online business?",
        answers: {
            1: "Google",
            2: "PayPal",
            3: "Twitter",
            4: "Facebook",
        },
        correctAnswer: "PayPal",
    },

    {
        question: "How much is Elon Musk worth?",
        answers: {
            1: "176.7 Billon",
            2: "204.8 Billon",
            3: "218.1 Billon",
            4: "236.5 Billon",
        },
        correctAnswer: "218.1 Billon",
    },
];

// // event listener on the start quiz.


//hide that and then show questions inside a function

//event listener on all answer buttons. only add one.

// seprate function to change the question to the next question 

//// compare the buttton they pick to the right answer

//set up timer last

// take the time they have left as their score

// save that as their high score in local storage

// key and the score saved to local storage

// no page manu other than hidding and unhiding things 

