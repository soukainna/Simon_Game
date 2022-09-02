
var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []
var level = 0
var started = false
 

$(document).keypress(function() {
    if(!started){
        $("#level-titlea").text('Level ' + level)
        nextSequence()
        started = true
    }
})

$(".btn").click(function() {
    console.log(this)
    var userChosenColour = $(this).attr("id")
     console.log(userChosenColour)
     userClickedPattern.push(userChosenColour)
     console.log(userClickedPattern)
     playSound(userChosenColour)
     animatePress(userChosenColour)
     checkAnswer(userClickedPattern.length-1)
     console.log(userClickedPattern.length-1)
 })



function playSound(name) {
    var audio = new Audio(`sounds/${name}.mp3`)
    audio.play()
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed")

    setTimeout(function() {
    $("#" + currentColour).removeClass("pressed")}, 100)
}

function nextSequence() {

    userClickedPattern = []
    level++
    $("#level-title").text("Level " + level)
    var randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber)
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    console.log(gamePattern)
    console.log(randomNumber, randomChosenColour)
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)
   

}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel])
    {
        console.log("successs")
        if (userClickedPattern.length === gamePattern.length){
    
            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
              nextSequence();
              console.log("user", userClickedPattern)
              console.log("user", gamePattern)
            }, 1000);
    
          }
    } else {

        console.log("wrong");
        playSound("wrong")
        $(document.body).addClass("game-over")
        setTimeout(function(){
            $(document.body).removeClass("game-over")
        }, 200)
        $("h1").text("Game Over, Press Any Key to Restart")
        starOver()
      }
}

function starOver(){
    level = 0;
    started = false
    gamePattern = []
}



