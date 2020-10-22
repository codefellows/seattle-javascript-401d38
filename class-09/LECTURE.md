# Class 09

## Warm Up

- Create a math server.
  - 2 routes in a express server.
    - 1 Route is a GET on /add, which takes multiple numbers from the path and adds them together
      - GET /add/1/2/3 => 6
      - GET /add/2/4/6/7/9 => 28
    - 1 Route is a GET /sub, takes multiple numbers in the path, and subtracts them.
      - GET /sub/1/2/3 => -4
    - Add other math routes if time prevails.

## Code Review

- Riva testing our routes.  
  - What code runs, when.

- Drive vs navigate?
  - Where should Start?


## Router Param Middleware

- A method on a router, that let's us use specific middleware function when a parameter is present
  - `/products/:id`
  - `productRouter.param('id', (req, res, next) => console.log('id is in route'))`
- We'll use this to make our router dynamically select our resource.

## Mongoose Vitual Joins

- Getting data from resources that share a local and foreign key
- Our Products will always contain a category?
  - If a category exists, the category object was attached
  - Mongoose has a feature for that: virtauals ( field added to the schema at runtime, when the query occurs )
