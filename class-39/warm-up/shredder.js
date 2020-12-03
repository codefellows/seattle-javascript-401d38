const $$ = {
  render: function (template, data, target) {
    // put your code here
  }
}

let characters = [
  { name: "Fred", phone: "555-1212" },
  { name: "Wilma", phone: "555-2121" },
  { name: "Betty", phone: "555-1313" },
  { name: "Barney", phone: "555-3131" },
]

characters.forEach(character => {
  // render the people template with the character and append it to the people
  $$.render('#people-template', character, '#people');
});


