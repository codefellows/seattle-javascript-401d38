// Show all the buttons
let buttons = $$('button');
console.log('All Buttons', buttons);

// Show each button independently
buttons.nodes.forEach(button => {
  console.log('BUTTON:', $$(button));
});
