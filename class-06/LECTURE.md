# Class 06

## Warm Up

- Creating Cards from a Deck.
  - Organizing our markup.
  - 3 chunks to our layout?
     -  Image display: "Media"
     -  Section that contains "title"and "copy"
     -  Section for all "Links:

```html

<div>

  <img>

  <section>
    <title></title>
    <copy></copy>
  </section>

  <section>
    <a>
  </section>

</div>

```

 - 4 div
   - 1 for "media"
   - 1 for "title"
   - 1 for "copy"
   - 1 for "links"

```html
<style>
  article {
    display: flex;
    flex-direction: column; 
  }
</style>


<article>

  <div>{media}</div>

  <div>{title}</div>

  <div>{copy}</div>

  <div>{links}</div>

</article>

```

- Rules for styling.

## Review

- Collections, what are collections, what do I make a collection for?
  - a library with one goal, to handle mongo operations.
    - Seperating our Notes specific logic from our mongo database logic.
- Connecting Locally
  - In order to deploy to heroku (and have database connection), we  will need to configure and connect to atlas.
    - Change of Connection URL.
    - Provision a cluster.
    - Create a user and give that user a password.

## REST and HTTP

- HTTP
  - Hyper Text Tranfer Protocol
    - method of talking between computers, that send back text (HTML / JSON)
    - Always has:
      - Method: the type of operation being performed by the request
        - GET ( not a whole of of stuff to consider )
        - POST ( expect a body of data )
        - PUT ( the last 3 have a variation of data / IDS )
        - PATCH
        - DELETE
      - Header:
        - This is an object that describes the request.
        - Often says what the content type that the requesting computer is using
          - Sending a string? HTML? JSON?
      - Response:
        - Object that contains a status.
          - 200 ( request success )
          - 400 ( user error )
          - 500 ( service issue )
        - potentially the data that was requested.
          - HTML document.
          - Sending back JSON. Data to be consumed by another computer.

- REST
  - Representational State Transfer.
  - Stateless, there is no specific state being maintained for the client.
  - Convention for performing CRUD.
    - Sending a preformatted slice of state to another machine.
    - Uses a very presecriptive format for requests.
      - Strictly adheres to HTTP methods
        - GET (always return something for a given resource).
        - POST (always creates something for a given resource).
        - PUT / PATCH (always update something for a given resource).
        - DELETE (always deletes something from a given resource).
    - We always have a method, and a URL that points to a given resource by ending the URL with the resoure name.
  - GET : `http://localhost:3000/notes`
    - This request ( if its RESTful ) is always reading notes (more than one).
  - GET : `http://localhost:3000/notes/someId`
    - This request (if RESTful) will always return at least one, using a search query.
  - POST : `http://localhost:3000/notes`
    - This will create a new note.
  - PUT : `http://localhost:3000/notes/someId`
    - This will find a note, based on `someId` and replace that whole note.
  - PATCH : `http://localhost:3000/notes/someId`
    - This will find a note, but only update specific fields for that same note.
  - DELETE : `http://localhost:3000/notes/someId`
    - Finds something via `someId`, and removes it entirely.

## JSON-Server

- This is a library for prototyping, getting a application running, with very little code ( no work ) for testing.
- Simply install and run
  - After you've made a small JSON file.

## Swagger

- Documenting our API
- Test with swagger: https://inspector.swagger.io/builder
  - Go to th above
    1) Test your routes
       1) GET `url`
       2) POST `url`
          1) body
       3) PUT `url`
       4) PATCH `url`
    2) Select the requests that you want to add to your documentation.
    3) Click "Create API Definition"
       1) Make sure you select "OAS 2.0"
    4) Add details and select "Import OpenAPI from Inspector"
    5) Click "Export" in the top right corner
       1) Choose "Download API"
          1) make sure to download JSON
    6) Add JSON to docs folder in project code.
- Very quick, easy to see what an operation produces.

## Heroku

- Two things required for Heroku to run:
  - a "start" script in your package.json
  - a PORT env variable that is used to open your server, when .listen is called.
