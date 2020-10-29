// Show all the buttons
let paragraph = $$('p');
let buttons = $$('button');

paragraph.on('mouseover', (element) => {
  console.log('Get off my lawn!');
})

buttons.on('click', (element) => {
  console.log('Clicked on the button:', element);
})
