# jQuery Notes

## Introduction
jQuery is a fast, lightweight, and feature-rich JavaScript library that simplifies HTML DOM traversal, event handling, animations, and AJAX interactions.

### Features:
- DOM manipulation
- Event handling
- Animations and effects
- AJAX support
- Cross-browser compatibility

## Getting Started
### Including jQuery
You can include jQuery using a CDN:
```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```
Or download and include it locally:
```html
<script src="jquery.min.js"></script>
```

> Including it through CDN is a better way to include jQuery in your code 
> And keep in mind that the script tag is placed above the linking of the **index.js** as the code is read from top to bottom

## jQuery Syntax
Basic jQuery syntax:
```javascript
$(selector).action();
```

> This `$` that we are using here represents the whole thing that we use to write i.e. `document.querySelector()`

Example:
```javascript
$("p").hide(); // Hides all <p> elements
```

## Selectors
jQuery selectors are used to find elements in the DOM.

### Basic Selectors
```javascript
$("*")          // Select all elements
$("p")         // Select all <p> elements
$(".class")    // Select elements with a specific class
$("#id")       // Select an element with a specific id
```

### Advanced Selectors
```javascript
$("div:first")      // Select the first <div>
$("p:last")        // Select the last <p>
$("p:even")        // Select even indexed <p>
$("p:odd")         // Select odd indexed <p>
$("input:checked") // Select checked inputs
```

## Event Handling
```javascript
$("#btn").click(function() {
    alert("Button Clicked!");
});
```
Common events:
```javascript
$("#id").hover();   // Mouse hover event
$("#id").dblclick(); // Double click event
$("#id").keydown();  // Keydown event
$("#id").keyup();    // Keyup event
```

## Effects & Animations
```javascript
$("#id").hide();
$("#id").show();
$("#id").toggle();
$("#id").fadeIn();
$("#id").fadeOut();
$("#id").slideDown();
$("#id").slideUp();
```

## Manipulating the DOM
### Changing HTML Content
```javascript
$("#id").text("New Text");
$("#id").html("<b>Bold Text</b>");
$("#id").val("New Value");
```

### Adding & Removing Elements
```javascript
$("#id").append("<p>Appended</p>");
$("#id").prepend("<p>Prepended</p>");
$("#id").after("<p>After</p>");
$("#id").before("<p>Before</p>");
$("#id").remove();
```

## AJAX with jQuery
```javascript
$.get("test.txt", function(data) {
    alert(data);
});

$.post("test.php", { name: "John" }, function(data) {
    alert("Response: " + data);
});
```

## Conclusion
jQuery simplifies JavaScript operations for manipulating the DOM, handling events, creating animations, and working with AJAX. It is useful for quick scripting and cross-browser compatibility.
