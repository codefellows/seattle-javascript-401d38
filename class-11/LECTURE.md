# Class 11

## Warm Up

- Kevin: why use express.Router()
  - Let's us define our routing logic in a seperate file.

## Auth System

## Basic Authentication

- Who are you?
- Encoding vs Encrypting
  - An encoded http header
  - An encrypted username/password
    - This is what we store in our data layer.
    - We never store un-encrypted user credentials.
  - encoding is a two way process
    - anything we encode can be decoded.
    - we don't encoding anything to precious and leave that way.
    - We encode to make our data more readable by other systems.
    - Changes the format of something systematically.
  - Encrypting is one way
    - Creates a thing that cannot be reversed.
    - Typically hashed an input to obscure data.
    - Today we are using bcrypt as our encryption library.
- Two parts to our Authentication system
  - encoding of the username:password for an HTTP request.
    - We use base64 encoding to package up our username:password for the HTTPS connection.
    - We'll use `base64` npm library to decode our auth string.

## Auth Middleware
