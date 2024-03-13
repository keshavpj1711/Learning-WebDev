# CSS Display
When using the display property in CSS we mainly use 3 properties:

- inline
- block 
- inline-block
- none: when display set to none the object disappears

Now let us see what these 3 properties does.

## block
When `display: block` the element covers the whole block as shown in the image below and the next element comes in the next line.

![image explaining `diplay: block`](./images/image.png)

## inline
When `display: inline` the element covers only the space of the content as shown in the image below and the next element comes just after it.

![image explaining `diplay: inline`](./images/image%202.png)

Also in this we can't set the width and height of the element as it is controlled by the amount of content in the element.

## inline-block 
Both inline and block have there set of issues but those can be solved by `display: inline-block`, since: 
- the block property lets us change height and width, and
- the inline property lets us keep elements in a single line.


# CSS Float

![image exlaining float property](./images/image%203.png)

![image explaining clearing from float](./images/image%204.png)

> One thing to note is that float property is not commonly used to make desired layouts, we have better things like flexbox and bootstrap for acheiving better and stable results.


# Making your stuff responsive

There are 4 major ways to do it:

- Media Queries
- CSS Grid
- CSS Flexbox
- External Frameworkds eg: Bootstrap