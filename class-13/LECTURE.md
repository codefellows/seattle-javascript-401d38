# Class 13: OAuth

## Review Basic / Bearer Auth

- Basic Authentication
  - Who are you?
  - Using strings.
    - What does our system need to do to these strings?
      - 1) base-64 encode our strings
        - Typically done on the client side.
        - "username:password"
        - Why do we do this?
          - Protection ( partly the answer )
          - For standardizing our input for any basic auth system.
            - Always going to get a string of a certain length.
            - Any system that speaks basic auth is going to be to do something with this.
      - 2) Send it to the our Server and decode
        - We use the username and password to now check if a user exists
        - We compare password with encrypted password.
      - 3) If this checks out, we create that Token and send this back to the user
- Bearer Authentication
  - Who are you?
  - Using the Token.
  - How does our system know who the user is using the token?
    - Our system made the token
    - We can decode this token ( using our secret string / signature )
    - Note: This is all done using JsonWebToken


## Oauth: Authentication using a 3rd Party

- We are creating an alternative to our basic auth routes
  - Don't send our auth service you sensitive data, just authorizer a third party to give us your data.
  - The end goal is get a user from google / facebook / github / yahoo.
  - We need to just a generate a token
    - We are going to create a user object, without sensitive details.
- The process
  - 3 way handshake between, The User, The Client, Our Resource Server, Auth Provider ( today our auth provider is github )
  - 5 step process that invloves request being made between the client => auth provider => Resource Server
- Client ID: Associates our Resource server with the auth provider
- Client Secret: A secret code for only the resource serve and auth provider, let's the auth provider resource server signed up to use the Oauth workflow.
- Redirecrt URI: a route on the resource server that can accept requests from the auth provider.
  - Getting the Access Code
  - Getting User data
- Scopes:  the permission for different fields of data for the user.
