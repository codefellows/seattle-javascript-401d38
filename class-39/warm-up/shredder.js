const $$ = {
  render: function (template, data, target) {
    // put your code here

    // find the template?
    //  document method to grab the template string

    let templateHTML = document.querySelector(template).innerHTML;
    console.log(templateHTML);
    // Put Data in the template
    //  change the innerHTML\

    // template = <li>{name} {phone}</li>

    // for each char in template, wait for an open bracket
    let output = templateHTML;
    for (let prop in data) {
      output = output.split(`{${prop}}`).join(data[prop]);
    }

    // => <li>Fred 555-1212</li>

    // Append the new innerHTML to the target

    let targetEl = document.querySelector(target)
    targetEl.innerHTML += output;
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


