var randomNumber1 = 0;
var randomNumber2 = 0;

$(document).click(function() {
  randomNumber1 = Math.floor(Math.random()*6)+1;
  randomNumber2 = Math.floor(Math.random()*6)+1;
  document.getElementById("i1").src = "images/dice"+randomNumber1+".png";
  document.getElementById("i2").src = "images/dice"+randomNumber2+".png";

  if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  }
  else
    if ((randomNumber1 != 0) && (randomNumber2 != 0))
      document.querySelector("h1").innerHTML = "Draw!";

});
