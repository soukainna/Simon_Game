
var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    console.log(randomNumber, randomChosenColour)
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio(`sounds/${randomChosenColour}.mp3`);
    $("#" + randomChosenColour).on("click", function() {
        audio.play();
    })
    $("div").click(function(e) {
        console.log(e)
        var userChosenColour = e.target.id
        console.log(userChosenColour)
    })
}


nextSequence()