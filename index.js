// Question Specific Elements
var theQuestionBox = document.getElementById("question-holder");
var checkAnswer = document.getElementById("check-answer");
var question = document.getElementById("question-text");

// Start Screen Elements
var startScreen = document.getElementById("start-container");
var startButton = document.getElementById("start-button");

// Finished screen elements
var endScreen = document.getElementById("quiz-over");
var finalScore = document.getElementById("final-score");
var initialsInput = document.getElementById("initials-input");
var finalScore = document.getElementById("final-score");
var submitButton = document.getElementById("submit-button");

// Button Elements
var button1 = document.getElementById("answer1");
var button2 = document.getElementById("answer2");
var button3 = document.getElementById("answer3");
var button4 = document.getElementById("answer4");
var buttons = document.getElementsByClassName("answers");

// Header Elements
var theTimer = document.getElementById("timer");

// Question Object
var questionArray = [

    {
        question: "Who is Ellie's partner and also main protagonist of the 'Last of Us'?",
        choices: ["1. Buck", "2. Jack", "3. Joel", "4. Chris"],
        answer: "3. Joel"
    },
    {
        question: "What is the name of Master Chief's AI companion in the 'Halo' franchise?",
        choices: ["1. Eva", "2. Cortana", "3. Siri", "4. Parthurnax"],
        answer: "2. Cortana"
    },
    {
        question: "What year did the 5th installment of the Elder Scrolls, 'Skyrim', release?",
        choices: ["1. 2010", "2. 2014", "3. 2011", "4. 2015"],
        answer: "3. 2011"
    },
    {
        question: "In Yoko Taro's 'Nier: Automata' how many endings exist?",
        choices: ["1. Twenty", "2. Fifteen", "3. Seven", "4. Twenty-Six"],
        answer: "4. Twenty-Six"
    },
    {
        question: "Is Mass Effect 3's ending good or bad?",
        choices: ["bad", "bad", "bad", "bad"],
        answer: "bad"
    },
    {
        question: "This is Question 6?",
        choices: ["1. Correct", "2. Wrong", "3. Wrong", "4. Wrong"],
        answer: "1. Correct"
    }

]

startScreen.style.display = "flex";
theQuestionBox.style.display = "none";
endScreen.style.display = "none";


// Keep track of current question
var currentQuestion = 0;

// Current Score
var currentScore = 0;

// Time Elements
var timeLeft = 60;
theTimer.innerHTML = ("Time: "+ timeLeft);

function setTime(){

    // Set time on start/restart
    timeLeft = 60;

    // Handling the timer and timeout functionality
    var timerInterval = setInterval(function(){

        timeLeft--;
        theTimer.innerHTML = ("Time: "+ timeLeft);

        if(timeLeft === 0){

            clearInterval(timerInterval);
            finalScore.textContent = ("Your Final Score is "+ currentScore);
            timeLeft = 0;
            currentScore -= 20;
            endGame();

        }
        if(endScreen.style.display === "flex"){

            clearInterval(timerInterval);
            currentScore += timeLeft;

        }
    }, 1000)
}

// Handling the lose and win conditions and keeping track of Right/Wrong answers
function quizEnd(){

    // Deactivate the question holder and display the game over with score 
    if(currentQuestion === questionArray.length){

        startScreen.style.display = "none";
        theQuestionBox.style.display = "none";
        endScreen.style.display = "flex";
        
        // Post the final score
        currentScore += timeLeft;
        finalScore.textContent = ("Your Final Score is "+ currentScore);

    }else{

        QuizThing();

    }
}

// Check if the question is right or wrong
function answerRight(){

        currentScore += 25

}
function answerWrong(){

    if(currentScore >= 10){

        currentScore -= 10

    }
}

// Handles the timeout function bringing you to the end screen
function endGame(){

    startScreen.style.display = "none";
    theQuestionBox.style.display = "none";
    endScreen.style.display = "flex";

}

// Restart the program after submitting a highscore
function reloadQuiz(){
    
    currentScore = 0;

    startScreen.style.display = "flex";
    theQuestionBox.style.display = "none";
    endScreen.style.display = "none";

}


// Start Quiz function
function QuizThing(){

    // Set all elements according to the current question
    question.innerHTML = questionArray[currentQuestion].question;
    button1.innerHTML = questionArray[currentQuestion].choices[0];
    button2.innerHTML = questionArray[currentQuestion].choices[1];
    button3.innerHTML = questionArray[currentQuestion].choices[2];
    button4.innerHTML = questionArray[currentQuestion].choices[3];

// Code that I couldnt figure out for the life of me why it was breaking -------------------------
    // for(var i = 0; i < questionArray.length; i++){

    //     buttons[i].innerHTML = questionArray[currentQuestion].choices[i];
    
    //     buttons[i].addEventListener("click", function(){
    
    //         console.log(currentQuestion)
    
    //         if(this.innerHTML === questionArray[currentQuestion].answer){
    
    //             checkAnswer.innerHTML = "CORRECT";
    //             currentQuestion++;
    //             console.log("Correct Answer")
    //             QuizThing()
    
    //         }else{
        
    //             checkAnswer.innerHTML = "WRONG";
    //             currentQuestion++;
    //             console.log("Wrong Answer")
    //             QuizThing()
    
    //         }
    //     })
    // }
}

// Instead of the above code I initialized each button manually
button1.addEventListener("click", function(){
    
    console.log(currentQuestion)

    if(this.innerHTML === questionArray[currentQuestion].answer){

        checkAnswer.innerHTML = "CORRECT";
        currentQuestion++;
        console.log("Correct Answer");
        quizEnd();
        answerRight();

    }else{

        checkAnswer.innerHTML = "WRONG";
        currentQuestion++;
        console.log("Wrong Answer");
        quizEnd();
        answerWrong();

    }
})

button2.addEventListener("click", function(){
    
    console.log(currentQuestion)

    if(this.innerHTML === questionArray[currentQuestion].answer){

        checkAnswer.innerHTML = "CORRECT";
        currentQuestion++;
        console.log("Correct Answer");
        quizEnd();
        answerRight();

    }else{

        checkAnswer.innerHTML = "WRONG";
        currentQuestion++;
        console.log("Wrong Answer");
        quizEnd();
        answerWrong();

    }
})

button3.addEventListener("click", function(){
    
    console.log(currentQuestion)

    if(this.innerHTML === questionArray[currentQuestion].answer){

        checkAnswer.innerHTML = "CORRECT";
        currentQuestion++;
        console.log("Correct Answer");
        quizEnd();
        answerRight();

    }else{

        checkAnswer.innerHTML = "WRONG";
        currentQuestion++;
        console.log("Wrong Answer");
        quizEnd();
        answerWrong();

    }
})

button4.addEventListener("click", function(){
    
    console.log(currentQuestion)

    if(this.innerHTML === questionArray[currentQuestion].answer){

        checkAnswer.innerHTML = "CORRECT";
        currentQuestion++;
        console.log("Correct Answer");
        quizEnd();
        answerRight();

    }else{

        checkAnswer.innerHTML = "WRONG";
        currentQuestion++;
        console.log("Wrong Answer");
        quizEnd();
        answerWrong();

    }
})

// Adding the onClick to the start button
startButton.addEventListener("click", function(){

    startScreen.style.display = "none";
    theQuestionBox.style.display = "flex";
    quizEnd();
    setTime();
})

// Adding the onClick for the submit highscore button
submitButton.addEventListener("click", function(event){

    event.preventDefault();
    console.log(initialsInput.value);

    // Check if the input box is empty on submission
    if(initialsInput.value === ""){

        window.alert("Enter in your initials into the input box please");

    }else{

        getStoredItems();
        location.reload();

    }

})

var scoreArray = []

// Locally stored variables
function getStoredItems(){
    
    var scoreStorage = localStorage.getItem('High Score');

    var finalList = JSON.parse(scoreStorage);

    if(finalList !== null){

        scoreArray = finalList;

    }

    var scorePair = {
        Initials: initialsInput.value, 
        Score: currentScore
    }
    console.log(scorePair.Initials)
    console.log(scorePair.Score)

    scoreArray.push(scorePair);

    localStorage.setItem("High Score", JSON.stringify(scoreArray));

}






