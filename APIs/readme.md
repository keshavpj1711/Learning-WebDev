# APIs

## What is an API?

An API (Application Programming Interface) is a set of rules or protocols that allows different software applications to communicate with each other. Think of it as a bridge that lets one program "talk" to another, sharing data or requesting specific actions.

APIs work on a request and response model:
  - The client (like your app or website) sends a request.
  - The server (the system providing the data or service) processes the request and sends back a response

## Architectural Styles

### GraphQL

- **How it works:** GraphQL is a query language for APIs. Instead of multiple endpoints, you send a single query describing exactly what data you need, and the server responds with just that data

- **Data format:** Always returns JSON.

- **Why popular:** Reduces the number of requests needed and avoids getting too much or too little data. The client controls the shape of the response.

- **Example:** You can ask for a user’s name and email in one request, and get only those fields back

### SOAP(Simple Object Access Protocol)

- **How it works:** SOAP is an older protocol that uses XML to send messages between client and server. It’s strict and follows a set of rules for messaging

- **Data format:** Always uses XML.

- **Why used:** Known for strong standards, built-in error handling, and security features. Still used in enterprise systems and legacy applications.

- **Example:** A SOAP request is an XML document sent over HTTP or HTTPS to perform actions like retrieving or updating data

### REST:API(Representational State Transfer)

- **How it works:** REST APIs use standard HTTP methods (like GET, POST, PUT, DELETE) to access and manipulate data, usually represented as resources (e.g., users, posts)

- **Data format:** Most often uses JSON, but can use other formats like XML or HTML.

- **Why popular:** Easy to understand, flexible, and scalable. Works well with web applications.

- **Example:** To get a user’s details, you might send a GET request to api.example.com/users/123

### gRPC

- **How it works:** gRPC is a modern framework based on the concept of Remote Procedure Calls (RPC). It lets programs call functions on remote servers as if they were local

- **Data format:** Uses Protocol Buffers (protobuf), which is a compact, binary format (not human-readable like JSON or XML).

- **Why popular:** Fast, efficient, and supports multiple programming languages. Great for microservices and high-performance systems.

- **Example:** You define service methods in a .proto file, and both client and server use generated code to communicate using those methods