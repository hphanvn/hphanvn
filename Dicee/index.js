var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
document.getElementById("i1").src = "images/dice"+randomNumber1+".png";
document.getElementById("i2").src = "images/dice"+randomNumber2+".png";

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else
  document.querySelector("h1").innerHTML = "Draw!";
