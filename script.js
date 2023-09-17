var startBtn = document.getElementById("start")
var timeEl = document.querySelector('.time');
var questionEl = document.querySelector("question")
var mainEl = document.getElementById('main');
var grade = document.getElementById("grades");
var currentQuestion = 0;

// Keeps track of grade
var studentGrade = {
    Grade: null
}
localStorage.setItem("studentGrade", JSON.stringify(studentGrade));

//I need to review arrays and loops

const allQuestions = [
    firstQuestion = {
        Question: "What is the capital of France?",
        A: "Paris",
        B: "Toulouse",
        C: "Nantes",
        D: "Strasbourg",
        Correct: "A"
    },
    secondQuestion = {
        Question: " What is the capital of Germany?",
        A: "Hamburg",
        B: "Berlin",
        C: "Munich",
        D: "Dortmund",
        Correct: "B"
    },
    thirdQuestion = {
        Question: "What is the capital of Italy?",
        A: "Rome",
        B: "Venice",
        C: "Milan",
        D: "Ravenna",
        Correct: "A"
    },
    fourthQuestion = {
        Question: "What is the capital of Spain?",
        A: "Austin",
        B: "Mexico City",
        C: "Vienna",
        D: "Madrid",
        Correct: "D"
    },
    fifthQuestion = {
        Question: "What is the capital of Sweden?",
        A: "Brussels",
        B: "Beijing",
        C: "Stockholm",
        D: "Berlin",
        Correct: "C"
    }
]

//120 seconds for 5 questions
var secondsLeft = 60;
startBtn.addEventListener("click",
    function(event) {
     var timerInterval = setInterval(function() {
            secondsLeft--;
            timeEl.textContent = secondsLeft + " Seconds left";

            if (secondsLeft <= 0) {
                clearInterval(timerInterval);
                // Ends the test
                testEnd();
            }
        }, 1000);
    }
    // prompts first question to appear
    
);

startBtn.addEventListener("click",
    function (event) {
        studentGrade.Grade = 0;
    }
)
startBtn.addEventListener("click",
    function (event) {
        console.log("potato")
        regenerateQuestion();
        // I need to create a loop to iterate through the questions and iterate over my choice and display all of it.

        // for (let i = 0; i < allQuestions.length; i++) {
        //     document.getElementById("testQuestions").innerHTML="<p>" + allQuestions[i].Question + "</p>";
        //     document.getElementById("testAnswers").innerHTML=
        //     "<button id = A class = questionAnswers>" + allQuestions[i].A + "</button><br>" + 
        //     "<button id = B class = questionAnswers>" + allQuestions[i].B + "</button><br>" + 
        //     "<button id = C class = questionAnswers>" + allQuestions[i].C + "</button><br>" +
        //     "<button id = D class = questionAnswers>" + allQuestions[i].D + "</button><br><p></p>";
        // }
        // [firstQuestion][firstQuestion]
        // allQuestions.firstQuestion.Question === allQuestions[0].Question
    }
);

startBtn.addEventListener("click",
    document.getElementById("testAnswers").addEventListener("click",
    function(event) {
        console.log("taco")
        console.log(event.target.id)
        if (event.target.id === allQuestions[currentQuestion].Correct) {
            console.log("correct")
            currentQuestion += 1;
            studentGrade.Grade += 1;
            console.log(studentGrade.Grade)
            document.getElementById("answerGrade").innerHTML ="Correct"
            if (currentQuestion === allQuestions.length) {
                testEnd();
                console.log("goldfish")
            } else {
                regenerateQuestion();
            }
        } else {
            console.log("incorrect")
            console.log("Subtract Time")
            secondsLeft -= 15;
            document.getElementById("answerGrade").innerHTML ="Incorrect"
        }   
    })
)
startBtn.addEventListener("click",
    function (event) {
        startBtn.innerHTML = "";
    }
)

function regenerateQuestion() {
    document.getElementById("testQuestions").innerHTML="<p>" + allQuestions[currentQuestion].Question + "</p>";
    document.getElementById("testAnswers").innerHTML=
    "<button id = A class = questionAnswers>" + allQuestions[currentQuestion].A + "</button><br>" + 
    "<button id = B class = questionAnswers>" + allQuestions[currentQuestion].B + "</button><br>" + 
    "<button id = C class = questionAnswers>" + allQuestions[currentQuestion].C + "</button><br>" +
    "<button id = D class = questionAnswers>" + allQuestions[currentQuestion].D + "</button><br><p></p>";
}
// Ends the test
function testEnd() {
    timeEl.textContent = "Time's up!";
    secondsLeft = 0;
    document.getElementById("testQuestions").innerHTML = "<p>Grade:" + studentGrade.Grade + "/5</p>";
    document.getElementById("submitName").innerHTML = "<label for=\"Initials\">Initials</label> <input type=\"text\" name=\"Initials\" id=\"Initials\" placeholder=\"Initials\" />";
    document.getElementById("submitButton").innerHTML = "<button id=submitButton>Submit</button>";
    document.getElementById("testAnswers").innerHTML = "";
    document.getElementById("answerGrade").innerHTML = "";
}


document.getElementById("submitButton").addEventListener("click",
    function submitScore(event) {
        var initialsSubmitted = document.getElementById("Initials").value;
        console.log(initialsSubmitted);
        document.getElementById("scoreBoard").innerHTML = "<p>" + initialsSubmitted + " " + studentGrade.Grade + "/5</p>";

    }
)

 
// GIVEN I am taking a code quiz

// WHEN I click the start button (Complete)
// THEN a timer starts and I am presented with a question

// WHEN I answer a question (Complete)
// THEN I am presented with another question

// WHEN I answer a question incorrectly (Complete)
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0 (Complete)
// THEN the game is over

// WHEN the game is over (Complete)
// THEN I can save my initials and my score
