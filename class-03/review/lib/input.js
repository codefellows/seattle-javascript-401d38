'use strict';

class Input {

  constructor(args) {
    const commands = this.parseCommands(args);
    this.payload = commands.payload;
    this.action = commands.action;
  }

  parseCommands(inputCommands) {
    const results = {};

    // list of command to validate
    const validCommands = ['add', 'delete'];

    // dynamically look for data from a list commands
    for (let command of validCommands) {
      if (Object.keys(inputCommands).includes(command)) {
        results.action = command;
        results.payload = inputCommands[command];
      }
    }

    return results;
  }

  valid() {
    if (this.action && this.payload) {
      return true;
    }

    return false;
  }

}

module.exports = Input;
