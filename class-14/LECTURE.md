# Class 14: Authorization

## Warm Up

- Shredder event listeners
- Find an element using the $$ function
- be able to assign an event listener to the element that was selected.

## OAuth Review

- Team 1: Wordpress
  - Getting the starter code to work
  - Grab client Id and Client Secret
  - Deep dive into the Docs
  - Getting the Code and turning it into a token was difficult
  - Riva: URL encoding of our form data.
  - Once we got that token in exchange for the Code, we could get our user Data.
- Team 2: Yahoo
  - Not able the user data.
  - Diciphering the docs, what is required from the Auth Provider.
  - Going step by step
    - Getting the correct URL to the connect to the Uath Provider login screen.
      - Receive client_secret / client_id / redirect_uri / response_type / nonce
      - Decipher the auth providers language into our own idea for Oauth workflow.
    - API server listening on a port.
    - Getting a response from yahoo.
  - Got to the login screen, weren't able to redirec to the server.
- Team 3: Discord
  - Docs where somewhat good
  - Getting the code was pretty easy
  - Exchanging the Code for the access_token was hard.
  - Figuring our how to process a bad request.
    - Capturing Errors in async JS, is real hard.
    - We have breaking issues in places that are hard predict.
  - Random flail, changing the redirect was the key.
  - Bad error handling on Discord.

Review of Steps for Oauth

- 5 steps
  - Presteps: Make an App on the Auth providers system this gives a couple things
    - Redirect URL: The URL that the Auth provider can use to talk to our resource server.
    - Client Id: How the auth service knows our application.  Ties our redirect URL and Client secret together on the providers system.
      - Not the client the user is using.
    - Client Secret: It's a string that authenticate our server with the auth provider.
      - Combine this with the client_id and redirect URI and the auth service knows your request is legit.
    - scopes / grant ( what are we trying to get from the user )
  - 1) User authenticates with the Auth providers platform.
  - 2) Auth Provider sends a request to our Resource server, with a access_code.
    - Combine this with a secret and we'll give an access_token.
  - 3) Our Resource Server exchanges the Code for an Access_token.
    - This is done by combing the Access_code with the client_secret.
  - 4) Using the access_token we now have access to user data.
    - exchange access_token for user data.
  - 5) User now gets access, we send the orignal user's machine our own token.
  

## Authentication vs Authorization

- Authentication "Who are you"
- Authorization "Can you do what you are requesting"
  - perfrom CRUD on some resources.
  - When might we not want to let someone do that.

## Access Control List

- We have a system that can create a user and assign a token.
- How can we assign that user a list of things that they can do?
