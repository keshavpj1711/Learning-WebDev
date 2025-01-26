var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
// console.log(randomNumber1, randomNumber2)

const container = document.body.querySelector(".container");
const players = container.getElementsByClassName("dice");
const p1 = players[0].lastElementChild;
p1.setAttribute('src', './images/dice'+randomNumber1+'.png')
const p2 = players[1].lastElementChild;
p2.setAttribute('src', './images/dice'+randomNumber2+'.png');

if (randomNumber1 > randomNumber2) {
  document.getElementById("heading").textContent = 'Player 1 Wins';
} else if (randomNumber1 < randomNumber2) {
  document.getElementById("heading").textContent = 'Player 2 Wins';
} else {
  document.getElementById("heading").textContent = 'Draw!';
}
