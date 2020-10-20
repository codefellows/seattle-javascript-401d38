# Class 07

## Warm Up

- Robert
  - Container for the total card elemtn

Riva
 - Can we create a 'before' and 'after' class? 



```html

<div id="container" classname="hero | list-item">


</div>


```

```css

#container {
  /* This props will always be there */
  /* box-shadow */
  /* border-radius */
  /*  */
}

.hero {
  font-size: 10;
}

.list-item {
  font-size: 10%;
}

```

## Express Framework

- Builds a server for you.
  - Something that gives something to a client (a requesting agent).
  - RESTful.
    - HTTP method : 'GET/POST/PUT/DELETE" | route : "/resource/{ID}"
    - Standard way of requesting things.
  - Unopinionated, it just lets you run js.
    - It doesn't care what you js does.
    - It makes your js, by giving 3 things as parameters to your functions
      - request : object
      - response : object
      - next : function

- NPM library, we install with npm
- all we have to do is create our app using `express()`
  - The app is a RESTful API.
  - We still need to provide routes, but we can start the app open it up to requersts.


## Router

- Express gives us a router object, that we configure based on a namespace.
  - /resource-name
    - express-router for all of our user / message / category / product related CRUD

## Middleware

- Anything that has access to the request object, and the response object
  - If you want to break these up, and pass data from one middleware to the "next", we use the next function.
