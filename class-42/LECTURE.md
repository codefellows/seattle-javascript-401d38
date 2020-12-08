# Class 42: Advanced React Native

## Warm Up

- Creating a React Context Provider and Consumer
- See Warm Up Folder, Thanks Michael and Leah!

## React Native Review / Graphql

- Permissions
- Contacts
- Phone Call
  - Feature linking.
- Camera?
  - Darius: Shout Out Czarl!!
    - expo.io documentation, was good.
- Kevin: git repo automatically created.
  - Quite a few problems with permissions.
- Riva: Are we going to show our classmates.
  - If we get our apps on expo, we can each other links to our apps.

Fetching 3rd party Data from a React Native App

- Different things are accessible in the 'Native' environment.
- Expo gives us access to a version of isomorphic fetch, much like the browser
- Third party libraries are available as well
  - axios / superagent: these let us make http requests to the APIs.
  - We can also use other javascript libararies to let us get data in other ways, like graphql.

Graphql: Adding structured queries to our requests for third party resources.

- We as the client (a machine requesting data), can determine which fields / properties get returned in a request.
- When you make a request, you might get unknown amounts of data retuned
  - based off a data schema that is stored elsewhere.
- Many fields are esoteric to a specific.
- The shape of our data from a request can be big and ugly.
- SQL: SELECT from POKEMON, name, url
  - Hopefully the third party will save resource when fetching daa
  - A consistent shape for our client.
  - No more HTTP metthods to think about, only queries vs mutations.
    - A mutation just is a query that makes a change to third party data.
- This is a technology that requires a server and a client libary.
  - A server must exist wih a graphql endpoin and accept graphql queries.

## Deploying React Native Projects

- `expo publish`
- `expo build:ios` or `expo build:android`

### Publishing to Expo

- Deploy to the expo app registry.
- Feed the application build to the xcode simlator.

### Publishing to iOS or Android

- Build propduction code that you can take to the app store
