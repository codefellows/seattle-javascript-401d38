## Class 26: Component Based UI

## Warm Up
Create tests for the Deque class

- See warm-up folder

## What is a Component

- A piece of something else!
- Something that is reusable.
- Something that has 'state'.
  - any data (string, number, boolean) that a component needs.
- In a user interface, the smallest piece of content that can live on it's own.
  - Atomic components contain the minimal amount of data / content to do a task.
    - should fulfill a contract, the contract and be testable.

## What / Why / How is React

- We've come from express land ( the most popular js framework)
  - we're heading React lan ( UI library ).
- What is a library vs a framework?
  - Framework: an environment that can run your code.
  - Library: a tool that you use in your code.
- React is both a library and a framework.
- Sits at the top of a lot of Component UI frameworks.
  - It's very flexible, it lets teams large a small dictate how they want to use it.
  - At it's peak, it was very class based syntax that engineers from other languages.
  - It accomplished the same thing as
    - Angular
    - Vue
    - ( Boostrap )
  - It adds a lot of heft to a front end
    - There is a workflow that needs to happen before you can run any code in the browser

## Setup and Config for a React Application

- babel and transpiling
  - These are tools used to take non browser friendly code, and convert it into js that is compatible with whatever browser js version.
  - import syntax / 
- It's also using webpack (depency bunlder under the hood).
- All of the config here is done by react-scripts.
- front end UI is typically dissected into 3 places
  - content: HTML
  - business: JS
  - style: CSS
- React wants us to include these in one file.
  - Why change this up?
  - React does break up these things into seperate files once their 'built'
  - These are now going to be defined in our React commponent file.
  - Atomic nature of a component (minimalistic job) makes sense in a hierarchy of components
    - The class based nature makes sense to engineers.
- Component State
  - data types  and values that a component needs to fulfill its job.
  - You only create values as component state when it's something that can change.
  - React a lifecycle that each component goes through.
    - mounts to the dom
    - it processes info from parent elements (props)
    - it calls the render method to display content.
- React uses a 1 way flow of data, from parents down to there children
  - We pass data from parent to child, via `props`

## Sass
