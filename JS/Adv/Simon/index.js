genSeq = []

currentLevel = genSeq.length;
console.log(currentLevel);

$("body").keypress(function () { 
  console.log("KeyPress")
  if ($("#level-title").text() === "Press A Key to Start") {
    $("#level-title").text("Level " + currentLevel);
  }
});