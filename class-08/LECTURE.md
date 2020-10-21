# Class 08

## Code Review for Express

- What should our app do?
  - See UML
- What is a route?
  - An address that directs you to a piece of info.
  - Utilize a HTTP method.
  - In express this ends with a function.
    - The function must utilze the response object from express.
- What is Middleware?
  - Any method / function that sits between the request and response.
  - Helps us build our our application functionality.
    - Let's us bolt on extra features to our routes.
    - We can add whole features to our requests response cycle.
  - They use a function called `next()`.
    - if you pass a value into, express treats this as an error.
    - Tif: confusion from docs, when handling errors.
      - Error handling middlewares get an extra parameter: (err, req, res, next);
- What are the request, response object?


## Adding A Data Layer to our App

- We are in the same as week 1
  - controller for notesy, was jsut some node functions that managed command line inputs
  - Data layer was our atlas / local mongoDB software
  - Let's marry these two ideas in a an express application.
    - Some interface / collection that can do data layer stuff just for mongo
    - We use this inferface in our route handlers

## Implement Mongo / Mongoose interface

- See typed-demo
