// Hero model for Mongoose

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Step 1  - Create the Schema
var heroesSchema = new Schema({
  alias: { type: String, required: true },
  first_name: String,
  last_name: String,
  city: String,
  power_name: String
});

// Step 2 - Create the model
var Hero = mongoose.model('Hero', heroesSchema); // if no collection for 'Book', Mongoose will create one called 'books'

// Step 3 - Export model for use in other parts of the app
module.exports = Hero;
