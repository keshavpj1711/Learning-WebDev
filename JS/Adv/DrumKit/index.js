// alert("The js file is now connected")

var buttons = document.body.getElementsByClassName("drum")

// To loop thru all buttons
for (let i = 0; i < buttons.length; i++) {
  const element = buttons[i];
  element.addEventListener("click", handleClick)
}

function PlaySound(buttonInnerHTML){
  var sound;
  switch (buttonInnerHTML) {
    case "w":
      sound = "tom-1";
      break;
  
    case "a":
      sound = "tom-2";
      break;

    case "s":
      sound = "tom-3";
      break;
    
    case "d":
      sound = "tom-4";
      break;

    case "j":
      sound = "crash";
      break;

    case "k":
      sound = "kick-bass";
      break;

    case "l":
      sound = "snare";
      break;

    default:
      break;
  }
  var audio = new Audio("./sounds/"+sound+".mp3");
  audio.play();
}

function handleClick(){
  var buttonInnerHTML = this.innerHTML;

  PlaySound(buttonInnerHTML);
}

// pressing keys 
document.addEventListener("keydown",function(event){
  var keyPressed = event.key;
  // console.log(keyPressed);
  PlaySound(keyPressed)
})