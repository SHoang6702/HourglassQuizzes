var startBtn = document.getElementById("start")
var timeEl = document.querySelector('.time');
var questionEl = document.querySelector("question")
var mainEl = document.getElementById('main');
var grade = document.getElementById("grades");

// Keeps track of grade
// var studentGrade = {
//     studentGrade: studentGrade.value
// }
// localStorage.setItem("studentGrade", JSON.stringify(studentGrade));

const firstQuestions = {
    Question: "What is the capital of France?",
    A: "Paris",
    B: "Toulouse",
    C: "Nantes",
    D: "Strasbourg",
    Correct: "A"
};

const secondQuestions = {
    question: " What is the capital of Germany?",
    A: "Hamburg",
    B: "Berlin",
    C: "Munich",
    D: "Dortmund",
    Correct: "B"
};

const questionCorrect = () => {
    
}

const questionIncorrect = () => {

}

//120 seconds for 5 questions
var secondsLeft = 10;
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
    function(event) {
        console.log("potato")
        document.getElementById("testQuestions").innerHTML="<p>" + firstQuestions.Question + "</p>";
        document.getElementById("testAnswers").innerHTML=
        "<button id = answerA>" + firstQuestions.A + "</button><br>" + 
        "<button id = answerB>" + firstQuestions.B + "</button><br>" + 
        "<button id = answerC>" + firstQuestions.C + "</button><br>" +
        "<button id = answerD>" + firstQuestions.D + "</button><br><p></p>";
    }
);


// Ends the test
function testEnd() {
    timeEl.textContent = "Time's up!";
}

 
// GIVEN I am taking a code quiz

// WHEN I click the start button (Timer Complete, question WIP)
// THEN a timer starts and I am presented with a question

// WHEN I answer a question (WIP)
// THEN I am presented with another question

// WHEN I answer a question incorrectly (WIP)
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0 (Complete)
// THEN the game is over

// WHEN the game is over ()
// THEN I can save my initials and my score
