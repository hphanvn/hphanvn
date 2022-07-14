var gamePattern = [];
var userClickPattern = [];
var nextLevel = 1;
var userChosenColour = 5;
var redSound = new Audio("sounds/red.mp3");
var greenSound = new Audio("sounds/green.mp3");
var blueSound = new Audio("sounds/blue.mp3");
var yellowSound = new Audio("sounds/yellow.mp3");
var wrongSound = new Audio("sounds/wrong.mp3");

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  const buttonColors = ["red", "blue", "green", "yellow"];
  randomChosenColour = buttonColors[randomNumber];
  $("#" + randomChosenColour).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
  playSound(randomChosenColour);
  return randomChosenColour;
}

function playSound(color) {
  switch (color) {
    case "red":
      redSound.play();
      break;
    case "blue":
      blueSound.play();
      break;
    case "green":
      greenSound.play();
      break;
    case "yellow":
      yellowSound.play();
      break;
    case "wrong":
      wrongSound.play();
      break;
    default:
      console.log(color);
  }
}

function blinkText() {
  $("#level-title").fadeOut(500);
  $("#level-title").fadeIn(500);
}

if (gamePattern.length === 0)
  setInterval(blinkText, 1000);
else
  clearInterval(blinkText);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function animatePress(el, ms, mclass){
  $("#"+el).addClass(mclass);
  await sleep(ms);
  $("#"+el).removeClass(mclass);
}

const equals = (a, b) =>
  a.length === b.length &&
  a.every((v, i) => v === b[i]);


$(document).ready(function() {
  //Player starts by press a key
  $(document).keydown(function() {
    /* Act on the event */
    $("#level-title").text("Level 1");
    $("#end-game").text("");
    nextLevel = 1;
    gamePattern = [];
    userClickPattern = [];
    if (gamePattern.length === 0) {
      gamePattern.push(nextSequence());
    }

    $(".btn").unbind().click(function() {
      /* Act on the event */
      userChosenColour = this.id;
      animatePress(userChosenColour, 100, "pressed");
      if (userClickPattern.length < gamePattern.length) {
        userClickPattern.push(userChosenColour);
        playSound(userChosenColour);
        if (equals(userClickPattern, gamePattern)) {
          nextLevel++;
          userClickPattern = [];
          $("#level-title").text("Well Done! New Level " + nextLevel);
          gamePattern.push(nextSequence());
        } else {
          if (userClickPattern.length === gamePattern.length) {
            playSound("wrong");
            $("#end-game").text("Game Over. Best score: "+nextLevel);
            $("#level-title").text("Press any key to restart!");
            animatePress("myBody",200,"game-over");
            nextLevel = 1;
            gamePattern = [];
            userClickPattern = [];
          }
        }
      }
    });
  });
});
