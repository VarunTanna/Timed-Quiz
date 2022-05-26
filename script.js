const quizQuestions = [
    {
        question: "In which country was Elon Musk born?",
        choicesEl: {
            1: "Romania",
            2: "Canada",
            3: "South Africa",
            4: "America",
        },
        correctAnswer: "South Africa",
    },

    {
        question: "ELon taught himself computer programming at what age?",
        choicesEl: {
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
        choicesEl: {
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

var state = "start";

var student = document.getElementById("student-names");
var grade = document.getElementById("grades");
var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");
var savedName = document.getElementById("saved-name");

saveButton.addEventListener("click", function (event) {
  event.preventDefault();

  var studentGrade = {
    student: student.value,
    grade: grade.value,
    comment: comment.value.trim()
  };

  var grades = JSON.parse(localStorage.getItem("studentGrades")) || [];

  grades.push(studentGrade);

  localStorage.setItem("studentGrades", JSON.stringify(grades));
  renderMessage();

});

function renderMessage() {
  var grades = JSON.parse(localStorage.getItem("studentGrades")) || [];
  var lastGrade = grades[grades.length - 1];

  if (lastGrade !== null) {
    document.querySelector(".message").textContent = lastGrade.student +
      " received a/an " + lastGrade.grade
  }
}



function displayState() {
    if (state === "start") {
        starts.style.display = "block"
        quizs.style.display = "none"
        gameOver.style.display = "none"
    }

    if (state === "quizs") {
        starts.style.display = "none"
        quizs.style.display = "block"
        gameOver.style.display = "none"
    }

    if (state === "gameOver") {
        starts.style.display = "none"
        quizs.style.display = "none"
        gameOver.style.display = "block"
    }
}

function init() {
    displayState();
}
