// Question Specific Elements
var theQuestionBox = document.getElementById("question-holder");
var checkAnswer = document.getElementById("check-answer");
var question = document.getElementById("question-text");

// Start Screen Elements
var startScreen = document.getElementById("start-container");
var startButton = document.getElementById("start-button");

// Button Elements
var button1 = document.getElementById("answer1");
var button2 = document.getElementById("answer2");
var button3 = document.getElementById("answer3");
var button4 = document.getElementById("answer4");
var buttons = document.getElementsByClassName("answers");

// Header Elements
var theTimer = document.getElementById("timer");

var questionArray = [

    {
        question: "Bobby Died?",
        choices: ["Yes", "No", "Maybe", "So"],
        answer: "Yes"
    },
    {
        question: "When did Bobby die?",
        choices: ["Yesterday", "Today","Last Night", "I dont know"],
        answer: "Last Night"
    },
    {
        question: "How did Bobby die?",
        choices: ["Stabbed to death", "Beaten to death","IDK", "I dont know"],
        answer: "I dont know"
    }

]

startScreen.style.display = "flex";
theQuestionBox.style.display = "none";

// Keep track of current question
var currentQuestion = 0;

// Time Elements
var currentTime = 30;
theTimer.innerHTML = ("Time: "+ currentTime);

// Start Quiz function
function quizRun(){
    
    question.innerHTML = questionArray[currentQuestion].question;

    for(var i = 0; i < 4; i++){

        buttons[i].innerHTML = questionArray[currentQuestion].choices[i];

        buttons[i].addEventListener("click", function(){

            if(this.innerHTML === questionArray[currentQuestion].answer){

                checkAnswer.innerHTML = "CORRECT";
                currentQuestion++;
                console.log("Correct Answer")
        
            }else{
        
                checkAnswer.innerHTML = "WRONG";

                currentTime -= 5;   
                theTimer.innerHTML = ("Time: "+ currentTime);

                currentQuestion++;
                console.log("Wrong Answer")

            }
        
            quizRun();

        })
    }
}

// Adding the onClick to the start button
startButton.addEventListener("click", function(){

    startScreen.style.display = "none";
    theQuestionBox.style.display = "flex";

    quizRun();

})

// Handling the lose and win conditions and keeping track of Right/Wrong answers
function gameEnd(){

    // Deactivate the question holder and display the game over with score 

}

// Add event listener to the submit button which Stores initials and score locally

// Finally make the highscores show up whenever the highscore button is clicked
// Retrieve highscores from local storage
// Clear Highscores removes scores from local storage
