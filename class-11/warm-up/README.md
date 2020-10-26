# Warm Up - Simple Express Server

## Instructions

Using only express, Build a restful API server with full CRUD for the following resources:

- `Users` with the following schema
  - name : string
  - id : string
- `Messages` with the following schema
  - recipient : string
  - sender : string
  - created_at: date
  - text : string

## Requirements

- The server should respond to all CRUD requests for both resources using either a HTTP Request Agent or JS Test suite.
- You should only use in memory data structures.  No Database layer should be implemented.

## Stretch

- If you have time, implement a middleware that can log a timestamp and the resource associated with each request.
