// Highscore Screen Elements
var highscoreScreen = document.getElementById("highscores-page");
var highscoreList = document.getElementById("highscore-list");
var backToMain = document.getElementById("highscores-back");
var clearHighscores = document.getElementById("clear-highscores");


function unloadScore(){

    var scoreStorage = localStorage.getItem('High Score');

    var finalList = JSON.parse(scoreStorage);



    for(i = 0; i < finalList.length; i++){

        var singleScore = finalList[i].Score;
        var singleInitials = finalList[i].Initials;

        var bingleton = document.createElement('li');

        bingleton.innerHTML = (singleInitials+" - "+ singleScore);

        highscoreList.appendChild(bingleton);
    }

}

clearHighscores.addEventListener("click", function(){

    localStorage.clear();
    location.reload();

})

unloadScore();