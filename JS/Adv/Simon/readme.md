# Simon Game 

This is a game where you need to remember a cpu generated pattern of sound and input it through clicks.

## Major Learnings 

### setTimeout()

How the `setTimeout(()=>{}, timeout)` function works and how the execution takes place during it's presence.

- The `setTimeout(()=>{}, timeout)` is asynchronous so it basically **schedules the code inside it to run after the the set delay**
- The code outside it will continue running without waiting.
  - This is basically what asynchronous means.
- Now let us see where not considering this could create an actual problem,\
  **Example:**
  ```javascript
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
  ```
  This code completes the for-loop immediately, this leads to all the sounds to be logged for approximately after 100ms, in order to solve this,
  ```javascript
  for (let i = 0; i < genSeq.length; i++) {
    const numKey = genSeq[i];
    let sound = colorKey[numKey];
    let audio = new Audio("./sounds/"+sound+".mp3");
    

    // animate the button playing the audio 
    setTimeout(() => {
      $("#" + sound).addClass("pressed");
      audio.play();
      setTimeout(() => {
        $("#" + sound).removeClass("pressed");
      }, 100);
    }, (i + 1) * 500); // 500ms being the time after which each audio plays
  }
  ```
