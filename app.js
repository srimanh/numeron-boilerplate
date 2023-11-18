// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
const playbtn=document.getElementById("play-button")
const page = document.querySelector("body")
playbtn.addEventListener("click",function displayGamepage(){
    window.location.href="game.html"
})
