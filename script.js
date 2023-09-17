var startBtn = document.getElementById("start")
var timeEl = document.querySelector('.time');
var mainEl = document.getElementById('main');
var grade = document.getElementById("grades");

var secondsLeft = 10;

// var studentGrade = {
//     grade: grade.value,
// };
// localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
// Starts the test

startBtn.addEventListener("click",
    function(event) {
     var timerInterval = setInterval(function() {
            secondsLeft--;
            timeEl.textContent = secondsLeft + "Seconds left";

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                // Ends the test
                testEnd();
            }
        }, 1000);
    },
    function(event) {
        console.log(event)
    }
)

function questionCorrect() {
}

function questionIncorrect() {
}

// Ends the test
function testEnd() {
    timeEl.textContent = "Time's up!";
}

 
// GIVEN I am taking a code quiz

// WHEN I click the start button (Complete)
// THEN a timer starts and I am presented with a question

// WHEN I answer a question (WIP)
// THEN I am presented with another question

// WHEN I answer a question incorrectly (WIP)
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0 (Complete)
// THEN the game is over

// WHEN the game is over ()
// THEN I can save my initials and my score
