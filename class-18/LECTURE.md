# Class 18

## Warm Up

- Create a hamburger menu using a header element.
  - Spencer
    - Unordered list
    - Style the list
  - Leah
    - Seperate div for a hamburger
    - Set list Item to "display none"
  - Riva
    - Toggles with a checkbox
    - Media query that hides / shows content
    - Transition to control the change of state.
    - Create an event that adds some attributes / properties / something to our DOM elements.
  - Jacob
    - On click requires a liiiiiittle bit of js.

```html

<header>
  <!-- any header content that is not the hamburger menu -->
  <ul id="hamburger">
    <div id='hamburger-button-open'>
      <div class="line"></div>
      <div class="line"></div>
      <div class="div"></div>
    </div>
    <div id='hamburger-button-closed'>
      <div class="diagonal-line"></div>
      <div class="diagonal-line"></div>
    </div>
    <li class="ham"> Item 1 </li>
    <li class="ham"> Item 2 </li>
  </ul>
  <!-- Rizo -->
  <!-- Use multiple divs to hide and display each menu -->
</header>

```

```js

const menu = document.getElementById('hamburger');

menu.addEventListener('click', () => {

  // add a classname / id
  // toggle something here

});

```

## Midterm Project Week

- There are going to be some prep assignment due this Friday
  - Team agreement in place
    - git workflows
    - disagreements
  - Create a github repo / organization
  - Proof of concept.
    - Present Jacob your overall application archicture.
- What things are we expected to build?
  - We are building backend server for the midterm.
    - Any application that talks to another machine
  - No User facing Interface.
  - Tests are required, use these as your user facing behavior.
    - We like lots of tests for all the use cases you application needs for MVP.
  
- Examples of Project
  - Apps that interface with a bot / automated tool
    - Discord / Slack / Youtube all have ways to talk to another computer.
  - App that that logs and saves those logs to a database.
    - Use express middleware.
  - REST APIs
    - Resources ( like messages / users / notes / jokes )
    - We have quite of knowledge, we can use new tech / new design patterns.

Teams
  - Are usually made by instructional staff
  - But we are flexible.

## Code Review: CAPS

- Started with Node events
  - One system that creates object that respond to a centralized event manager.
- Moved to TCP
  - Connect other machines to the centralized manager, and remotely response to events.
- New technology to assist with our Event management system.
- Our distributed event driven system.
  - No longer do we have one server, now we have multiple (specifically for our labs we had 3 servers);


## WebSockets

- Very prevalent for chat applications

## Socket.io / Socket.io-Client

- Library that uses websockets to facilitate real time communication between applications and namespaces. 
