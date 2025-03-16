let genSeq = [];
let userSeq = [];

let gameState = true;

let colorKey = {
  0: "green",
  1: "red",
  2: "yellow",
  3: "blue",
  4: "wrong"
}

let numKey = {
  "green": 0,
  "red": 1,
  "yellow": 2,
  "blue": 3
}

// console.log(colorKey[1])

function startGame() {
  if (genSeq.length === 0) {
    console.log("Game Started")
    genSequence();
  }
}

function gameOver() {
  genSeq = [];
  userSeq = [];
  $("#level-title").text("Game Over, Press A Key to Start");
}

function playSoundSeq() {
  // Traverse through genSeq and playSound accordingly
  for (let i = 0; i < genSeq.length; i++) {
    const numKey = genSeq[i];
    let sound = colorKey[numKey];
    let audio = new Audio("./sounds/"+sound+".mp3");
    

    // animate the button playing the audio 
    $("#"+sound).addClass("pressed");
    setTimeout(() => {
      audio.play();
      $("#"+sound).removeClass("pressed");
    }, 100);
  }
}

function playSoundClick(event) {
  sound = event;
  let audio = new Audio("./sounds/"+sound+".mp3");
  audio.play();

  // animate the button playing the audio 
  $("#"+sound).addClass("pressed");
  setTimeout(() => {
    $("#"+sound).removeClass("pressed");
  }, 100);
}

function genSequence() {
  let randomNumber = parseInt(Math.random()*4);
  genSeq.push(randomNumber);
  playSoundSeq();
}

// Clicking button and taking inputs
$(".btn").click(function (event) { 
  // console.log(event.currentTarget.id);
  let clickedBtn = event.currentTarget.id;
  userSeq.push(numKey[clickedBtn]);
  playSoundClick(clickedBtn);

  // After every click we run the game logic in order to check whether the user input is correct or not
  gameLogic();
});

function gameLogic() {
  console.log("Computing...")

  // Adding the last click to the userSeq

  console.log("GenSeq: "+genSeq);
  console.log("UserSeq: "+userSeq);

  if (genSeq.length !== userSeq.length) {
    if (genSeq[userSeq.length-1] !== userSeq[userSeq.length -1]) {
      gameOver();
    }
  } else {
    if (genSeq[genSeq.length -1] === userSeq[userSeq.length -1]) {
      // If the last element is equal then the user goes to nxt level and a new number is added to the seq
      // And the userSeq is cleared as the user need to enter the details once again.
      console.log("Moving to Next Level");
      genSequence();
      $("#level-title").text("Level " + genSeq.length);
      userSeq = []; 
    } else {
      gameOver();
    }
  }
}


$("body").keypress(function () { 
  console.log("KeyPress")
  if ($("#level-title").text() === "Press A Key to Start" || $("#level-title").text() === "Game Over, Press A Key to Start") {
    startGame();
    $("#level-title").text("Level " + genSeq.length);
  }
});