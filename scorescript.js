var scoresDiv = document.querySelector(".scores-div");
var clearScoresButton = document.querySelector(".clear-scores-button");
var existingEntries = JSON.parse(localStorage.getItem("users"));
var playAgainButton = document.querySelector(".play-again-button");

function getNewScore() {
    if(existingEntries !== null){    
        for (var i = 0; i < existingEntries.length; i++) {
        var newScoreDiv = document.createElement("div");
        var user = existingEntries[i].user;
        var score = existingEntries[i].score;
        newScoreDiv.textContent = user + ": " + score + " points";
        scoresDiv.appendChild(newScoreDiv);
        } 
        }else {
            return;
        }
    }


getNewScore();


clearScoresButton.addEventListener("click", function () {
    scoresDiv.textContent = "";
    localStorage.clear();
})

playAgainButton.addEventListener("click", function (){
    window.location.href = "index.html";
} )


