
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
     checkAnswer(userClickedPattern.length - 1)
     console.log(userClickedPattern.length - 1)
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
        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length){
    
            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
    } else {

        console.log("wrong");
  
      }
}



