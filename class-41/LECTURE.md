# Class 41: React Native

## Warm Up

- Building our Cards.

## Native Application Development

- Lots of new Variables in our development workflow.
- We've run javascript in the Browser
  - document
  - window
  - location
- We've also run javascript in Node
  - process
  - 'fs'
  - 'path'
  - 'http'
- Today we have 2 new runtime environment
  - Ios
  - Android
- We have to compile our javascript into either Java / Objective C.
  - We have some new build tools
  - Before we used `create-react-app` to compile our JSX / import syntax into plain old JS that a browser could use.
    - Babel / webpack.
  - Today we focus on `Expo`
- Just like how we had different programming interfaces between Node and the Browser, we have a whole lot more coming from the native programming interfaces within a mobile device.
  - Permissions
  - Make Phone Calls
  - Camera
  - Accelerometer

## React Native / Expo

- React Native library:
  - A whole super set of components, much like material UI.
    - These components will replace all the markup that we are used to creating.
- This is a big boost to JS > one UI design philosophy (React).

```js
// Vanilla React in the browser

return (
  <div>
    <h1>text</h1>
    <p>More text</p>
  </div>
)

// React Native
import { Container, Text} from 'react-native';


// These are the elements that are converted to mobile device specific elements
return (
  <Container>
    <text>React Native text</text>
  </Container>
)

```

- we are still using a workflow manage (similar to create-react-app).
  - We can apply all of our JSX and React design patterns, directly to a mobile App.

### Setup

- Mobile app development because your phone is a very protected resource.
  - unlike the browser, anything goes runtime environment.
  - Mobile app development is the opposite.
    - Every app on the app store, goes through a long validation that often costs money.
    - Expo app let's us side step this.

- Expo-cli: command line interface for doing expo stuff
  -`npm install -g expo-cli`
  - Once installed we can run:
    - `expo init project-name`
  - We can cd into `project-name`
    - run `npm start` to start your app.

- Install the expo mobile app
  - An application that lets you access your development code on your phone

### Emulators

- These tools have all the things needed to create a production package to publish your app on the app store.
  - Today well to emulate the developer environment.
- XCode: Make sure it's installed an updated
  - Includes an iOs device simulator.
- Android Studio
  - Use your phones hardware to tunnel it's goodness directly to your device.


## Things to talk about

- GraphQL
- Whiteboard Prep
  - Look up popular whiteboard questions
    - Paraphrase the problem the problem, ask any questions that need.
    - Solve the problem the with a visual. State with a drawing of the input, and work to get a visual of the output.
    - Turning that image into a list of steps.
    - Turn those steps into code.
  - Study traversals of data structures.
- Michael, deployment issues on gh-pages.
  - GH-pages (both the libaray and the Github service)
  - Common issues between.
