// Script.js

// grab all the elements 
var state = "start";
var viewHighScores = document.getElementById("viewhighscore");
var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var startButton = document.querySelector("#startBtn");
// var quizTitle = document.querySelector("#quizTitle");
var questionsEl = document.getElementById("questions");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var final = document.getElementById("finalScore");
var answerEl = document.getElementById("answer");
var timeRemaining = 90;
var position = 0;
var timer = document.getElementById("timer");


//quiz questions and answers objecct
var quizQuestions = [
    {
        question: "In which country was Elon Musk born?",

        choiceA: "Romania",
        choiceB: "Canada",
        choiceC: "South Africa",
        choiceD: "America",

        correctAnswer: "South Africa",
    },

    {
        question: "ELon taught himself computer programming at what age?",

        choiceA: "8",
        choiceB: "10",
        choiceC: "12",
        choiceD: "14",

        correctAnswer: "10",
    },

    {
        question: "At age 12, Elon sold his first computer program for $500. It was a video game called what?",

        choiceA: "Blastar",
        choiceB: "Space invaders",
        choiceC: "Pacman",
        choiceD: "Asteroids",

        correctAnswer: "Blastar",
    },

    {
        question: "In 1999, Elon founded X.com, which merged with Confinity 2 years later to become which online business?",

        choiceA: "Google",
        choiceB: "PayPal",
        choiceC: "Twitter",
        choiceD: "Facebook",

        correctAnswer: "PayPal",
    },

    {
        question: "How much is Elon Musk worth?",

        choiceA: "176.7 Billon",
        choiceB: "204.8 Billon",
        choiceC: "218.1 Billon",
        choiceD: "236.5 Billon",

        correctAnswer: "218.1 Billon",
    },
];


// display state which allows us to break the webapge up in different stats or pages. got help from instructor

function displayState() {
    if (state === 'start') {
        startEl.style.display = 'block';
        quizEl.style.display = 'none';
        endEl.style.display = 'none';
    }
    if (state === 'quiz') {
        startEl.style.display = 'none';
        quizEl.style.display = 'block';
        endEl.style.display = 'none';
        displayQuestions();
        setTime();
    }
    if (state === 'end') {
        startEl.style.display = 'none';
        quizEl.style.display = 'none';
        endEl.style.display = 'block';
        displayScore();
    }
}

// created buttons for our page thur j/s  recevied help from a friend for set up
function displayQuestions() {
    questionsEl.innerHTML = "";
    answerEl.innerHTML = "";

    var buttonA = document.createElement("button");
    var buttonB = document.createElement("button");
    var buttonC = document.createElement("button");
    var buttonD = document.createElement("button");
    var questionView = document.createElement("p");

    questionView.textContent = quizQuestions[position].question;
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



//hide that and then show questions inside a function
function displayMessage() {
    timer.textContent = "Time Left" + timeRemaining;
}


function setTime() {
    displayMessage();
    var timerInterval = setInterval(function () {
        timeRemaining--;
        displayMessage();

        if (timeRemaining === 0) {
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

//
function init() {
    displayState();

};
// moved evetn listenr to the bottom as instructed by teacher
startButton.addEventListener("click", function () {
    state = "quiz";
    displayState();
});

// quizTitle.addEventListener("click", function () {
//     state = "end";
//     displayState();
// });

answerEl.addEventListener("click", function (event) {
    if (event.target.type === "submit") {
        if (event.target.textContent === quizQuestions[position].correctAnswer) {
        } else {
            
            timeRemaining = timeRemaining - 15;
    
        }
        position++;
        if (position < quizQuestions.length) {
            displayQuestions();
        } else {
            state = "end";
            displayState();
        }
    }

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