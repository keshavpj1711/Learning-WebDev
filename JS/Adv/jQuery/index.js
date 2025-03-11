$("a").attr("href", "https://www.google.com");
$("a").css("text-decoration", "none");
$("a").css("color", "black");

console.log($("a").css("color"));

$("h1").click(function () {
  console.log("Clicked")
  if ($("h1").css("color") === "rgb(0, 0, 0)") {
    $("h1").css("color", "red");
  } else {
    $("h1").css("color", "black");
  }
});

// Setting button colors based on input colors

$("input").keypress(function (event) { 
  if (event.key === "Enter") {
    var button_color = $("input").val();
    console.log(button_color);
    $("button").css("background-color", button_color);  
  }
});

$("#changeColor").click(function () { 
  var button_color = $("input").val();
  console.log(button_color);
  $("button").css("background-color", button_color);  
});

// Showing what key we have pressed

$("body").keypress(function (event) { 
  $("#input").text(event.key);
  setTimeout(() => {
    $("#input").text("Anything you Press will show here");
  }, 3000);
});

// Hide/Show Title
$("#show").click(function () { 
  $("#title").fadeIn();  
});
$("#hide").click(function () { 
  $("#title").fadeOut();  
});