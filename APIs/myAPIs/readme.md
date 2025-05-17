# Why would someone use your API?

So for your API to be useful to someone it must provide one of the following services:

- Data Collection
  - Say for example you have a valuable dataset and someday you decide to make that available as an API

- Algorithm as a Service
  - Similarly you might have some algorigthm which takes some input and give useful data, that you can conv to API

- Simplified Interface.
  - One example for this would be take the case of Axios, how it does the work of http lib in a much simplar way.

One such marketplace for things like this is **Rapid API**.

# REST:API

## What makes an API RESTful?

- Uses Standard **HTTP Methods**(GET, POST, PUT, DELETE, PATCH)
- A **Standard data format**(usually JSON, sometimes XML)
- **Clients and Server are completly seperate**, they are not in the same file or on the same network.
  - This part of RESTful API architecture allows each side to be able to scale independently from each other
  and they can evolve and be completely built by seperate people. 
  - So this basically allows the whole system to scale very easily.
- **Stateless**: This means that each req from client to server should contain all the info.
  - Basically the server shouldn't be storing any sort of client side, state or client side data b/w requests
  - This helps in improving the capabilities of server by increasing the number of clients it can serve since 
  it doesn't have to worry about every req data.
- **Resource-Based**: it's an API that is centered around resources and uses a 
Unique Resource Identifier, also known as Resource Locator i.e. URI or URL

> The Internet as you know it WWW is considered one of the most successful implementation of RESTful Architecture.

## Different requests and how we work with them

- To get the path params: 
  `req.params.pathParamName`
- To get the query params:
  `req.query.queryName`
- To get the body params:
  `req.body.bodyVarName`