# What is CSS? 

CSS or Cascading Style Sheet is a way to add styling to your html code. There are mainly 3 ways in which you can add css to your code:

- Inline
- Internal
- External 

# Ways to add CSS

## Inline

In this styling can be directly added to that specific tag. Example:
```html
<html style="background:blue">
</html>
```

## Internal
In this way of adding css, we use `<style>Your_code_goes_here</style>`. Example:
```html
<html>
    <head>
        <style>
            html{
                background: red;
            }
        </style>
    </head>
</html>
```

## External
This is the best way to add styling to your html code using an external file **any_name.css***
To see it's use checkout the files in **Intro to CSS**