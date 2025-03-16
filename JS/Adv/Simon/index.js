let genSeq = [];
let userSeq = [];

let gameState = true;

let colorKey = {
  0: "green",
  1: "red",
  2: "yellow",
  3: "blue"
}

let numKey = {
  "green": 0,
  "red": 1,
  "yellow": 2,
  "blue": 3
}

// console.log(colorKey[1])

$("body").keypress(function () {
  console.log("KeyPress")
  if ($("#level-title").text() === "Press A Key to Start" || $("#level-title").text() === "Game Over, Press A Key to Start") {
    startGame();
    $("#level-title").text("Level " + genSeq.length);
  }
});

function startGame() {
  if (genSeq.length === 0) {
    console.log("Game Started")
    genSequence();
  }
}

function gameOver() {
  genSeq = [];
  userSeq = [];
  let audio = new Audio("./sounds/wrong.mp3");
  audio.play();
  $("#level-title").text("Game Over, Press A Key to Start");
}

function playSoundSeq() {
  // Traverse through genSeq and playSound accordingly
  for (let i = 0; i < genSeq.length; i++) {
    const numKey = genSeq[i];
    let sound = colorKey[numKey];
    let audio = new Audio("./sounds/" + sound + ".mp3");


    // animate the button playing the audio 
    setTimeout(() => {
      $("#" + sound).addClass("pressed");
      audio.play();
      setTimeout(() => {
        $("#" + sound).removeClass("pressed");
      }, 100);
    }, (i + 1) * 500);
  }
}

// To play sound when a button is clicked
function playSoundClick(event) {
  sound = event;
  let audio = new Audio("./sounds/" + sound + ".mp3");
  audio.play();

  // animate the button playing the audio 
  $("#" + sound).addClass("pressed");
  setTimeout(() => {
    $("#" + sound).removeClass("pressed");
  }, 100);
}

// Adding a random number to genSeq and playing sound in sequence after every addition
function genSequence() {
  let randomNumber = parseInt(Math.random() * 4);
  genSeq.push(randomNumber);
  playSoundSeq();
}

// Clicking button and taking inputs
$(".btn").click(function (event) {
  // console.log(event.currentTarget.id);
  let clickedBtn = event.currentTarget.id;
  playSoundClick(clickedBtn);

  // After every click we run the game logic in order to check whether the user input is correct or not
  gameLogic(clickedBtn);
});

function gameLogic(clickedBtn) {
  // Adding click to userSeq
  userSeq.push(numKey[clickedBtn]);

  console.log("Computing...")

  console.log("GenSeq: " + genSeq);
  console.log("UserSeq: " + userSeq);
  console.log("--------");

  // Main logic responsible 
  if (genSeq.length !== userSeq.length) {
    if (genSeq[userSeq.length - 1] !== userSeq[userSeq.length - 1]) {
      gameOver();
    }
  } else {
    if (genSeq[genSeq.length - 1] === userSeq[userSeq.length - 1]) {
      // If the last element is equal then the user goes to nxt level and a new number is added to the seq
      // And the userSeq is cleared as the user need to enter the details once again.
      setTimeout(() => {
        console.log("Moving to Next Level");
        genSequence();
        $("#level-title").text("Level " + genSeq.length);
        userSeq = [];
      }, 1000);
    } else {
      gameOver();
    }
  }
}
