# Class 27: Testing and Deployment

## Code Review

- Sara: logging state variables
  - When does React decide to do things?
- Create React App is the default way most people start a react project
- Public / Src 
  - Public is files that we will see at runtime
  - Src are files that need to be compiled (not runtime code).

## LifeCycle Methods

- There a set of events that every component that you render goes through
  1 Component will mount: component gets added to our DOM tree
    2 Component did mount
  2a Component will receive props: component gets data from it's parents
  3 render: component is having it's JSX displayed
    3a Component will update: component is having its state or props changed.
  4 Componet will unmount: views are being switched

## React Testing Library

- Our new way of testing our components
- When I give a component some data, what does the component do?
  - Display a list
  - Update some html elements.
- 3 new libraries
  - `@testing-library/react`
  - `@testing-library/jest-dom`
  - `@testing-librart/dom`

## Deploying to GH Pages

- Using gh-pages node module
- Also be using a github action to build and deploy our UIs

Things you need for gh-pages

1) a github action for deploying you source code
2) Personal access token from you user account ( not repository settings)
- User Settings > developer settings > personal access tokens
- Make sure to save after generating
- Save personal access token o repo secrets as `PERSONAL_TOKEN : what-you-just-generated`
2a) potentially a homepage property in package.json
3) build / deploy / predeploy scripts
   - react-scripts build
   - gh-pages -d build
   - npm run build
