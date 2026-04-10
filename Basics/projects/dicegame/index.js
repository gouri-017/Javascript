
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;
// alert("your 2 random numbers are" + randomNumber1+"and "+ randomNumber2)
var img1 = "imges/dice"+randomNumber1+".jpeg"
var img2 = "imges/dice"+randomNumber2+".jpeg"

document.querySelector(".img1").setAttribute("src" , img1)
document.querySelector(".img2").setAttribute("src" , img2)

if (randomNumber1>randomNumber2)
  document.querySelector("h1").innerHTML = "Player 1 Wins";
else if (randomNumber1 < randomNumber2)
  document.querySelector("h1").innerHTML = "Player 2 Wins";
else
  document.querySelector("h1").innerHTML = "draw";