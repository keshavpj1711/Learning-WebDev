# Cookies and Sessions 

- **Cookies** are small piece of data that a web server sends to your browser, 
and your browser stores it locally on your computer.

- **Sessions:** A session is a way for the server to remember information about a user across multiple requests. 
  - Since HTTP is stateless (meaning each request is independent and the server doesn't naturally remember previous requests)
    sessions solve this problem by creating a temporary "memory" of the user's interaction.

### What is Passport?
It's an auth middleware for Node.js. 