
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

$(".btn").click(function(e) {
    console.log(this)
    var userChosenColour = $(this).attr("id")
     console.log(userChosenColour)
     userClickedPattern.push(userChosenColour)
     console.log(userClickedPattern)
     playSound(userChosenColour)
     animatePress(userChosenColour)
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
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    console.log(randomNumber, randomChosenColour)
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)
   

}




