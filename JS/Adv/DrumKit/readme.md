# Event Listners

This small proj will help us get a hands on with the event listners and how to make the website react on what the user does with the help of event listners.

## addEventListner()

The `addEventListener()` method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

### Syntax

```
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
```

- type: event type like `"click"`
- listner: What to call when the event type is triggered like a function in js
  - when calling a fn keep in mind to call it without the parenthesis eg: `handleClick`
  - another way of doing this is instead of writing the fn seperately we can create an anonymous fn directly
  ```js
  document.querySelector("button").addEventListner("click", function(){
    alert("Button Clicked");
  })
  ```

# Sound in JS

## Playing Sound

```js
var audio = new Audio("./sounds/"+sound+".mp3");
audio.play();
```

# OOPs in JS

## Objects in JS

This is similar to structs in other langs like c and cpp. One such example of creating an object is shown below:

```js
var student = {
  name: "Keshav":,
  age: "20",
  degree: "Electrical",
  langs: ["Python", "GOLang"]
}
```

## Constructor Function in JS

```js
function Student (name, age, degree, langs) {
  this.name = name;
  this.age = age;
  this.degree = degree;
  this.langs = langs;
  // The const fn can also have fns known as methods for objects
  this.DoWork = function(){
    alert("Doing some work");
  }
}

// Now creating an object is much more easy
var stud1 = new Student("Keshav", 20, "Electrical", ["Python", "GO"]);
stud1.DoWork();
```