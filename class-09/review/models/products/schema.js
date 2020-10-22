'use strict';

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  display_name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: false }
}, // we need to configure the schema tto accept virtial fields
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  });

// we need to specify a reference for the virtual
productSchema.virtual('category_data', {
  ref: 'categories', // this needs to match a mongoose.model definition / collection name.
  localField: 'category',
  foreignField: 'name'
})

// when an operation happens ie: find / save / findById, we populate our virtial field
productSchema.pre('find', async function () {
  try {
    this.populate('category_data');
  } catch (e) {
    console.log(e);
  }
})

module.exports = mongoose.model('products', productSchema);
