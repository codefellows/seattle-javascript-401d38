'use strict';

class Notes{

  constructor(object){
    this.action = object.action;
    this.payload = object.payload;

  }

  execute(){
    if(this.action === '--add' || this.action === '-a'){
      this.add();
    }

  }

  add(){
    console.log('This is your note: ' + this.payload);
  }

}

module.exports = Notes;

// lab one code

// function Notes(args) {
//   this.id = Math.floor(Math.random()*1000);
//   this.text = args.payload;

// }

// Notes.prototype.execute = function(action){
//   if(action === '--add' || action === '-a'){
//     return this.add();
//   } else {
//     console.error('Error');
//   }
// };

// Notes.prototype.add = function(){
//   console.log('adding note ', this.text);
// };

// module.exports = Notes;
