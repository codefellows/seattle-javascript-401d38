'use strict';

// configures all the properties and values within a file titled `.env`
require('dotenv').config();
const mongoose = require('mongoose');

const { Schema } = mongoose;

// first we create a schema for a collection we would like to use
const NoteSchema = new Schema({
  text: { type: String, required: true },
  added: { type: Boolean, default: false },
  category: { type: String, required: false },
});

const NoteModel = mongoose.model('Notes', NoteSchema);

// this process.env object contains whatever key values pairs were inside of `.env`
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('we are connected to mongo')

    const newNote = new NoteModel({
      text: 'test',
      category: 'test',
    });

    newNote.save()
      .then(note => {
        console.log(note);
      })
      .catch(console.log);
  });



// NoteModel.find({ category: 'school'})
//   .then(notes => console.log(notes));
