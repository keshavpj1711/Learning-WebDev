# React 

## Conditional Rendering

### Ternary Operator

Its basically if-else (which are statements) but instead it's an expression.

```js
ifCondition ? doThisIfTrue : elseDoThis;
```

**Using it in code:**

```jsx
function Auth() {
  const isLoggedIn = true;

  return (
    {isLoggedIn?<Dashboard /> : <Login />}
  )
}

export default Auth;
```
> This basically shows the dashboard if user is loggedIn but if not it shows the Login 

### AND Operator

![alt text](image.png)

This basicallly give us the power to render something in the expression only when the condition is true.

For example say if the time is between 9 and 17 hours then only the user will have access to the auth page.

```
{(currentTime > 9 && currentTime < 17) && <Login />}
```

This will only render the Login page when the condition is satified.

